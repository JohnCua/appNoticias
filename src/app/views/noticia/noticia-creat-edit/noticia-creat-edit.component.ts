import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NoticiaService } from '../../../services/noticia.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-noticia-creat-edit',
  templateUrl: './noticia-creat-edit.component.html',
  styles: [
  ]
})
export class NoticiaCreatEditComponent implements OnInit, OnDestroy {

  private subscriptioions = new Subscription();

  programas: any[] = [];

  emailPattern = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  registerForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
    family_name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
    email: ['', Validators.compose([Validators.email, Validators.pattern(this.emailPattern)])],
    phone: ['', Validators.compose([Validators.pattern(/^[0-9]*$/),Validators.minLength(6)])],
    programa: [''],
    comment: [''],
  });

  get f() {
    return this.registerForm.controls;
  }

  constructor(private noticiaService: NoticiaService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.subscriptioions = this.noticiaService.getDataProgramas().subscribe( (data) => {

      let personasMap = data.map((item:any)=>{
        return [item.name,item]
      });

      var personasMapArr = new Map(personasMap); // Pares de clave y valor
      
      this.programas = [...personasMapArr.values()]; // Conversión a un array

      /*
      otra forma para obtener los datos sin que se repita
      let dataUnica: any;
      dataUnica = this.funcionUnico(data);
      console.log(dataUnica);
      */
     
    });

  }

  ngOnDestroy() {
    this.subscriptioions.unsubscribe();
  }

  
  funcionUnico(data:any) {

    let arrUnico:any[] = [];

    data.map((item:any,index:any)=> {

      if(!this.verificar(arrUnico,item)) {
        arrUnico.push(item);
      }

    });

    return arrUnico;

  }

  verificar(arrayUnico:any, programa:any) {

    let bandera = false;

    arrayUnico.map( (item:any) => {
        if(item.name === programa.name){
          bandera = true;
        }
    });

    return bandera;
    
  }

  submit() {

    if(this.registerForm.invalid){
      return;
    }

    this.subscriptioions = this.noticiaService.registerDataPrograma(this.registerForm.value).
      subscribe( (respuesta) => {
        this.registerForm.reset();
        Swal.fire('Registro creado', 'De click en el boton' ,'success');
        console.log(respuesta);
      },(error)=>{
        Swal.fire('Ocurrio un error', 'De click en el boton' ,'error');
        console.log(error);
    }); 
   
  }

 
}
