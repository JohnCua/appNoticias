import { createAction, props } from '@ngrx/store';
import { Noticia } from '../models/noticia.model';

export const setItems = createAction(
    '[Noticias] Set Items',
    props<{ items: Noticia[] }>()
    );


export const unSetItems = createAction('[Noticias] UnSet Items');