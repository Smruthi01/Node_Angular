import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  //constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
  // signupForm = this.fb.group({
  //   name: ['',Validators.required,Validators.minLength(2)],
  //   email: ['', [Validators.required, Validators.email]],
  //   password:['',  [ Validators.required,
  //            Validators.minLength(7),
  //         ]]
  // })
  //constructor(private fb: FormBuilder){}
  constructor(private authService : AuthService , private router: Router){}
  createFormGroup(): FormGroup {
    return new FormGroup({
      fullName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  signup(): void {
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["login"]);
    });
  }
 }
