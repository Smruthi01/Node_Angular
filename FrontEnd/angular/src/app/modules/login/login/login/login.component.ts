import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
          email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  
  login():void{
    console.log("login");
    if(this.loginForm.value.email=="admin.mystay@gmail.com"  && this.loginForm.value.password=="Mystay2022"){
      this.router.navigate(["admin"]);
    }
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe()
  }


}
