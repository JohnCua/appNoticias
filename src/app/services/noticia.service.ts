import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetodosBase } from './api/MetodosBase';
import { map } from 'rxjs/operators';
import * as modelos  from '../models/noticia.model';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends MetodosBase{

  constructor(
    private http: HttpClient,
) { super(http); }

     
     getDataNoticias() {
      return this.get(`noticias`).pipe(map( (snapshot:any) => {
           return snapshot.map( (noticia: modelos.Noticia) =>{

              return {
                ...noticia
              }
              
           } )
       } ));
    }


    // Obtener  informacion para el registro
    getDataProgramas() {
      return this.get(`programas`).pipe(map( (snapshot:any) => {
           return snapshot.map( (noticia: modelos.Programa) =>{

              return {
                ...noticia
              }
              
           } )
       } ));
    }


    registerDataPrograma(data: any) {
      return this.post(`registro`, data).pipe(map((respuesta) => {
        return respuesta;
      }));
    }

   

}
