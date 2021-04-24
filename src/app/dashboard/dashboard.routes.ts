import { Routes } from '@angular/router';
import { HomeIndexComponent } from '../views/home-index/home-index.component';
import { NoticiaCreatEditComponent } from '../views/noticia/noticia-creat-edit/noticia-creat-edit.component';
import { NoticiaDetailComponent } from '../views/noticia/noticia-detail/noticia-detail.component';

export const dashboardRoutes: Routes = [

    { path: 'home', component: HomeIndexComponent },
    { path: 'detalle', component: NoticiaDetailComponent },
    { path: 'registro', component: NoticiaCreatEditComponent },
    { path: '**', redirectTo: 'home' }

];