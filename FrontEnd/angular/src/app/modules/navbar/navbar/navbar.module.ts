import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularModule } from 'src/app/shared/modules/angular/angular.module';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    AngularModule
  ]
})
export class NavbarModule { }
