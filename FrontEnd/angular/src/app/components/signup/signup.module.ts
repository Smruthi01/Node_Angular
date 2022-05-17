import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { AngularModule } from 'src/app/shared/modules/angular/angular.module';
// const routes: Routes = [
//   { path: '', component :SignupComponent }
// ];
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularModule,
    SignupRoutingModule
  ]
  ,
  exports:[
   SignupComponent
  ]
})
export class SignupModule { }
