import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Noticia } from '../../models/noticia.model';
import { AppState } from '../../app.reducer';


@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styles: [
  ]
})
export class HomeIndexComponent implements OnInit, OnDestroy {

  noticias: Noticia[] = [];
  cards: Boolean      = true;

  private subscriptioions = new Subscription();

  constructor(private store:Store<AppState>,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.subscriptioions = this.store.select('noticias').subscribe( ({items}) => {
      if(items.length) {
        this.noticias = items;
      }
    });

  }

  ngOnDestroy() {
    this.subscriptioions.unsubscribe();
  }

  verDetalleNoticia(idNoticia:number) {
    this.router.navigate(['noticias',idNoticia])
  }

}
