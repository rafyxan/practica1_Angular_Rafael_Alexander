import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component: MainPageComponent },
    { path: '**', redirectTo: '' }
];
