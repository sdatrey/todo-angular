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
  isLoading = false;
 
 

  constructor( private router: Router,
    private http: HttpService,
    private httpclient: HttpClient) { }

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
    } this.isLoading = true;
    this.http.signUp(this.signupForm.value).subscribe(
      
       (res) => {
       
        console.log(res);
       
        localStorage.setItem('token',res.token);
         this.router.navigate(['/todo-list']);
         this.isLoading =false;
         
      }
    )
   
  }
  logintoList() {
    if(this.loginForm.invalid){
      return console.log('not valid');
    }this.isLoading = true;
    this.http.logIn(this.loginForm.value).subscribe(
      (res) =>  {
      
        console.log(res);
        
        localStorage.setItem('token', res);
        this.router.navigate(['/todo-list']);
       this.isLoading = false;
  }, error => { 
    this.isLoading= false;
    console.log(error);
   
    alert(error.error.errors[0].msg);
  
  }
    );
  }
  signupwithOther(){
   this.httpclient.get(
     'https://auth-ts.herokuapp.com/api/auth/facebook'
   ).subscribe(
     (res) => {
       console.log(res);
     },  error => { 
      this.isLoading= false;
      console.log(error);
     
      alert(error.error.errors[0].msg);
    
    }
   );

   
  }



}
