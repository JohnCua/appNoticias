import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../../app.reducer';
import { NoticiaService } from '../../../services/noticia.service';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styles: [
  ]
})
export class NoticiaDetailComponent implements OnInit, OnDestroy {

  img = '';

  noticia:any;

  imagenes = [
    {id: 1, imagen: 'photo-16.jpeg'},
    {id: 2, imagen: 'photo-17.jpeg'},
    {id: 3, imagen: 'photo-18.jpeg'},
    {id: 4, imagen: 'photo-19.jpeg'},
    {id: 5, imagen: 'photo-20.jpeg'},
    {id: 6, imagen: 'photo-21.jpeg'},
    {id: 7, imagen: 'photo-22.jpeg'},
    {id: 8, imagen: 'photo-23.jpeg'},
    {id: 8, imagen: 'photo-24.jpeg'}
  ];

  private subscriptioions = new Subscription();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store:Store<AppState>,
              private serviceNoticia:NoticiaService) { }

  ngOnInit(): void {

    const noticiaId = this.route.snapshot.paramMap.get('id');

    this.subscriptioions = this.store.select('noticias').subscribe( ({items}) => {
      if(items.length) {

        this.img = this.getUrlImgPublicidad();
        console.log(this.img);
        items.map( (item) => {
          if(Number(item.id) === Number(noticiaId)) {
            this.noticia = item;
          }
        });
      }
    });
 
  }

  ngOnDestroy() {
    this.subscriptioions.unsubscribe();
  }

  getUrlImgPublicidad() {
    const aletorio = this.imagenes[Math.floor(Math.random() * (this.imagenes.length))];
    const randomImg = 'assets/images/noticias/'+`${aletorio.imagen}`;
    return randomImg;
  }

}
