import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

//  {path : '',loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule)},

 // { path: 'signup',  component:SignupComponent},
//  { path: 'login',component:LoginComponent},
  {path : 'login',loadChildren:()=>import('./components/login/login.module').then(m=>m.LoginModule)},
//  { path: 'book', loadChildren: () => import('./components/booking/booking/booking.module').then(m=>m.BookingModule) },
// { path: "", component: HomeComponent },
// { path: "aboutus", component:HomeComponent },
//{ path: "book", component: BookingComponent },
 //{ path: "login", component: LoginComponent },
 // {path:"view",component:ViewComponent},
 // {path:"admin",loadChildren:()=>import('./components/admin/admin.module').then(m=>m.AdminModule)},
  //{ path: "admin", component: AdminComponent },

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
