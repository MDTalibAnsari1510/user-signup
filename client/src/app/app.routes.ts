import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full',
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'welcome/:username',
        component: WelcomeComponent,
    },
    { path: '**', redirectTo: 'sign-up' }
];
