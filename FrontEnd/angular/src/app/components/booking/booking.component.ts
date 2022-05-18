import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { BookingService } from './booking.service';
import { AuthService } from "src/app/service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  title = 'bookings';

  options = ["Mumbai","Hyderabad","Kolkata","Jaipur","Delhi", "Bengaluru", "Chennai","Manali","Hampi","Kochi","Munnar","Agra"];

  filteredOptions;


  formGroup : FormGroup;
  
  constructor(private service : BookingService, private fb : FormBuilder,private router: Router){}


  ngOnInit(): void {
    this.initForm();
    this.getNames();
    //this.book();
  
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      location: new FormControl("", ),
      from: new FormControl("" ),
      to: new FormControl(""),
    });
  }

  initForm() {
    this.formGroup = this.fb.group({
      'location' : ['']
  
   // throw new Error('Method not implemented.');
  })

  this.formGroup.get('location').valueChanges.subscribe(response => {
    console.log('data is ', response);
    this.filterData(response);

  })

}

filterData(enteredData) {
  this.filteredOptions = this.options.filter(item => {
    return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
  })
   
  } 
  getNames(){
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }
  
  book(): void {
    // this.service.book(this.formGroup.value).subscribe((msg) => {
    //   console.log(msg);
    //   this.router.navigate(["book"]);
    // });
  }


}