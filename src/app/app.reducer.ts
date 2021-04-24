import { ActionReducerMap } from "@ngrx/store";

import * as noticia from './redux/noticia.reducer';


export interface AppState {
    noticias: noticia.State
}


export const appReducers: ActionReducerMap<AppState> = {
    noticias: noticia.noticiaReducer
}