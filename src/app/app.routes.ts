import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginPageComponent } from './login-page/login-page.component';
export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: "details/:id",
        component: DetailsComponent,
        title: "Detail Page"
    },
    {
        path:"login",
        component:LoginPageComponent,
        title: "Login Page"
    },
];
