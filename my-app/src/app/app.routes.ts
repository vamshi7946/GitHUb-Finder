import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'search',
        component:UsersComponent,
    },
    {
        path:'user/:login',
        component:UserComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login2',
        component:Login2Component
    }
];
