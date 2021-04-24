import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../app.reducer';
import { NoticiaService } from '../services/api/noticia.service';
import * as noticiasActions from '../redux/noticia.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

 

  constructor( private store: Store<AppState>,
               private noticiaService:NoticiaService) { }

  ngOnInit(): void {

    this.noticiaService.getDataNoticias().subscribe( noticias => {

      console.log(noticias);
        //this.store.dispatch(noticiasActions.setItems({items: noticias}))
      }
    );

  }

  ngOnDestroy() {
    
  }

}
