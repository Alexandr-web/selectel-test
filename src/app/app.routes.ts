import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewPageComponent } from './components/pages/newPage/newPage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'new-page', component: NewPageComponent, },
];
