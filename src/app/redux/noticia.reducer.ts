import { createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './noticia.actions';

import { Noticia } from '../models/noticia.model';

export interface State {
    items: Noticia[],
}

export const  estadoInicial: State = {
    items: [] 
} 

const _noticiaReducer = createReducer(
    estadoInicial,

    on( setItems, (state , { items }) => ({ ...state, items: [...items]})),

    on( unSetItems, state  => ({ ...state, items: []})),

);

export function noticiaReducer(state:any, action:any) {
    return _noticiaReducer(state, action);
}