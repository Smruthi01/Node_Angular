import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AngularModule } from 'src/app/shared/modules/angular/angular.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularModule,
    ReactiveFormsModule
  ],
  exports:[
  AdminComponent
      ]
})
export class AdminModule { }
