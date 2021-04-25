import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../app.reducer';

import * as noticiasActions from '../redux/noticia.actions';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../models/noticia.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  private subscriptioions = new Subscription();

  constructor( private store: Store<AppState>,
               private noticiaService:NoticiaService) { }

  ngOnInit(): void {
    this.subscriptioions = this.noticiaService.getDataNoticias().subscribe( (noticias) => {
        this.store.dispatch(noticiasActions.setItems({items: noticias}));
      }
    );
  }

  ngOnDestroy() {
    this.subscriptioions.unsubscribe();
  }

}
