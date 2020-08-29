import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  loginForm: FormGroup;
  hide = true;
 

  constructor( private router: Router,
    private http: HttpService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.email, Validators.required] ),
      password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    });
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required] ),
      password: new FormControl('', [Validators.required]),
    });
  }
  signuptoList(){
    if(this.signupForm.invalid){
      return console.log('not valid');
    }
    this.http.signUp(this.signupForm.value).subscribe(
      (res) => {
        console.log(res);
         this.router.navigate(['/input']);
      }
    )
   
  }
  logintoList() {
    if(this.loginForm.invalid){
      return console.log('not valid');
    }
    this.http.logIn(this.loginForm.value).subscribe(
      (res) =>  {
  console.log(res);
  this.router.navigate(['/input']);
  }
    );
  }



}
