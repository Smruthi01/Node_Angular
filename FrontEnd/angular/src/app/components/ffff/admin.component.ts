// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AdminService } from './admin.service';


// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.scss']
// })
// export class AdminComponent implements OnInit {
//   adminForm: FormGroup;

//   constructor(private adminService : AdminService , private router: Router) { }

//   ngOnInit(): void {
//   }
//   createFormGroup(): FormGroup {
//     return new FormGroup({ 
//       HotelName: new FormControl("", [Validators.required, Validators.minLength(20)]),
//       location: new FormControl("", [Validators.required]),
//       password: new FormControl("", [
//         Validators.required,
//         Validators.minLength(7),
//       ]),
//     });
//   }

//    addHotel(): void {
//   //   this.adminService.admin(this.adminForm.value).subscribe((msg) => {
//   //     console.log(msg);
//       this.router.navigate(["admin"]);
//   //   });
//    }
 

// }
