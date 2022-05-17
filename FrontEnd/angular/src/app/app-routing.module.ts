import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './components/view/view.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component:HomeComponent },
  { path: "book", component: BookingComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },

 // { path: "signup", loadChildren: () => import('./components/signup/signup.module').then(mod=>mod.SignupModule) },
  {path:"view",component:ViewComponent}
  //{ path: "**", redirectTo: "" },
];
// const routes: Routes = [
//   {path:"",component:HomeComponent},
//    {path:"/login",component:LoginComponent},
  // {path:"/signup",component:SignupComponent},
  //  {path:"*",redirectTo:""}
//];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
