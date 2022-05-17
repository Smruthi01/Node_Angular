import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,MatNativeDateModule,
    MatSnackBarModule,MatDatepickerModule,MatIconModule,
    MatFormFieldModule,MatButtonModule,MatDividerModule,MatGridListModule,
    MatCardModule,MatInputModule,MatToolbarModule,
    MatDatepickerInput

  ]
  ,
  exports:[CommonModule,MatDialogModule,MatSelectModule,MatAutocompleteModule,MatNativeDateModule,MatIconModule,MatDatepickerModule,MatFormFieldModule,MatButtonModule,MatDividerModule,MatGridListModule,MatCardModule,MatInputModule,MatToolbarModule]

})
export class AngularModule { }
