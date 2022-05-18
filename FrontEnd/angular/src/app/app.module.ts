import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared.module'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { SignupModule } from './components/signup/signup.module';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { BookingModule } from './components/booking/booking/booking.module';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModule } from './components/admin/admin.module';
//import { AngularModule } from './shared/modules/angular/angular.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,    
    ViewComponent,

  ],
  imports: [
    MatAutocompleteModule,
    FormsModule,
    SharedModule,
    ClipboardModule,
  SignupModule,
  AdminModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    HomeModule,
   LoginModule,
    BookingModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
