import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/components/booking/booking.service';
import { map, startWith } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { BookserviceService } from 'src/app/service/bookservice.service';
import {  Search } from 'src/app/models/search';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

search:Search[];
 
  title = 'bookings';

  options = ["Mumbai","Hyderabad","Kolkata","Jaipur","Delhi", "Bengaluru", "Chennai","Manali","Hampi","Kochi","Munnar","Agra"];

  filteredOptions; 
  Category: any;
constructor(private fb : FormBuilder,private service : BookserviceService){}
ngOnInit(): void {
  this.initForm();
  this.getNames();
  this.search=[
    { id:1,category:"Family"},
    {id:2,category:"Couples"},
    {id:3,category:"Business"},
    {id:4,category:"Tourist"}
  ]
  }


  
  initForm() {
    this.bookform = this.fb.group({
      'location' : [''],
      'speciality':['']
       
  })

  this.bookform.get(['location','']).valueChanges
  .pipe(debounceTime(1000))
  .subscribe(response => {
    console.log('entered data is ', response);
    if(response && response.length){
      this.filterData(response);
    } else {
      this.filteredOptions = [];
    }
    
  })
}

   filterData(enteredData) {
  this.filteredOptions = this.options.filter(item => {
    return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
  })
   
} 
 getNames(){
  // this.service.getData().subscribe(response => {
  //   this.options = response;
  //   this.filteredOptions = response;
  // })
 }
 
 changeCity(e) {
      console.log(e.value)
      this.Category.setValue(e.target.value, {
        onlySelf: true
      })
    }
 
 
 //bookcontrol = new  FormControl();
  //  fromDateControl = new FormControl();
  bookform : FormGroup

  //      location= new FormControl();
  //      toDate : any;
  //     fromDate : any;
//       minDate = new Date();
//    //   onSubmit() {
    
        // if (this.bookform.invalid||!this.bookcontrol.value) {
        //   return;
        // }
        
    
   // const city=this.bookcontrol.value;  

    get cityName() {
      return this.bookform.get('category');
    }
    mySelect = '2';
    selectedValue: any;

    data=[{name:'Staycation',id:"1"}, {name:'Tourist',id:"2"},{id:"3",name:"'Couple Friendly'"} ,{id:"4",name:'Family Friendly'} ]
  
      selectChange() {
      this.selectedValue = this.service.getDropDownText(this.mySelect, this.data)[0].name;
  }

//   this.bookform.get(['location','speciality']).valueChanges.subscribe(response => {
//     console.log('data is ', response);
//   //  this.filterData(response);

//   })

//   this.fromDate=this.bookform.controls['fromDate'].value;
// this.toDate=this.bookform.controls['toDate'].value;

// localStorage.setItem('fromDatel',this.fromDate);
// localStorage.setItem("toDatel",this.toDate);
// const from = this.bookform.controls['fromDate'].value.getTime();

// const to = this.bookform.controls['toDate'].value.getTime();

 
    // this.bookform = new FormGroup({
    //   fromDate: new FormControl('', [Validators.required]),
    //   toDate: new FormControl('', [Validators.required]),
    // });
  


 // var event = new Date(this.bookform.controls['fromDate'].value);

Onsubmit(){
  //this.service.book(this.bookform.value).subscribe((msg))=>{
console.log(this.bookform.value)
  };
}




