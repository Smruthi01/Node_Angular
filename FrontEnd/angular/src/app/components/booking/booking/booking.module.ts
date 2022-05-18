import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from '../booking.component';
import { AngularModule } from 'src/app/shared/modules/angular/angular.module';
import { BookingRoutingModule } from '../booking-routing.module';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    AngularModule,
    ClipboardModule,
    BookingRoutingModule
    
  ],
  
  exports:[
    BookingComponent
      ]
})
export class BookingModule { }


