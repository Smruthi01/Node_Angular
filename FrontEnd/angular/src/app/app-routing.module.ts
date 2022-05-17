import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './components/view/view.component';



const routes: Routes = [

  {path : '',loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule)},
  { path: 'signup',  loadChildren: () => import('./components/signup/signup.module').then(m=>m.SignupModule)},
  { path: 'login',  loadChildren: () => import('./components/login/login.module').then(m=>m.LoginModule)},
//  { path: 'book', loadChildren: () => import('./components/booking/booking/booking.module').then(m=>m.BookingModule) },
// { path: "", component: HomeComponent },
// { path: "aboutus", component:HomeComponent },
  { path: "book", component: BookingComponent },
 // { path: "login", component: LoginComponent },
 // {path:"view",component:ViewComponent},
 // { path: "signup", component: SignupComponent },

  //{ path: "", loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule) },
 
 // { path: 'aboutus',  loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule) },
 
  //{ path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
