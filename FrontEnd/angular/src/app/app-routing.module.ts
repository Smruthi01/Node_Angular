import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { BookComponent } from './modules/book/book/book.component';
import { LoginComponent } from './modules/login/login/login/login.component';



const routes: Routes = [

  {path : '',loadChildren:()=>import('./modules/home/home/home/home.module').then(m=>m.HomeModule)},

  { path: 'signup', loadChildren:()=>import('./modules/signup/signup.module').then(m=>m.SignupModule) },
 { path: 'login',component:LoginComponent},
//  {path : 'login',loadChildren:()=>import('./modules/login/login/login/login.module').then(m=>m.LoginModule)},
 // { path: 'book', loadChildren: () => import('./modules/book/book/book/book.module').then(m=>m.BookModule) },
// { path: "", component: HomeComponent },
// { path: "aboutus", component:HomeComponent },
{ path: "book", component: BookComponent },
 //{ path: "login", component: LoginComponent },
 // {path:"view",component:ViewComponent},
 // {path:"admin",loadChildren:()=>import('./modules/admin/admin/admin/admin.module').then(m=>m.AdminModule)},
  //{ path: "admin", component: AdminComponent },

  //{ path: "", loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule) },
 
  { path: 'aboutus',  loadChildren: () => import('./modules/home/home/home/home.module').then(m=>m.HomeModule) },
 
  //{ path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
