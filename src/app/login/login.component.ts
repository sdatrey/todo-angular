import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validatingForm: FormGroup;
  hide = true;
 

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.email, Validators.required] ),
      password: new FormControl('', [Validators.required]),
    });
  }
  gotoList() {
    // if(this.validatingForm.invalid){
    //   return console.log('not valid');
    // }
  this.router.navigate(['/input']);
  }


}
