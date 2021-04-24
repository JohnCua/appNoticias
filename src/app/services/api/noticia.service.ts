import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetodosBase } from '../api/MetodosBase';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';


@Injectable()
export class NoticiaService extends MetodosBase { 

    constructor(
        private http: HttpClient,
        private store: Store < [] >
    ) { super(http); }

       // Obtener  informacion
  getDataNoticias() {
    return this.get(`noticias`);
  }



}