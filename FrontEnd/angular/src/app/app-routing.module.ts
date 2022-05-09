import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book", component: BookComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  //{ path: "**", redirectTo: "" },
];
// const routes: Routes = [
//   {path:"",component:HomeComponent},
//    {path:"/login",component:LoginComponent},
  // {path:"/signup",component:SignupComponent},
  //  {path:"*",redirectTo:""}
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
