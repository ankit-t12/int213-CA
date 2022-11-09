import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { LoginUser } from './user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends BaseComponent implements OnInit {
    
    usermodel:LoginUser=new LoginUser()
    userlist:Array<LoginUser>=new Array()
    loginForm:any = FormGroup;
    submitted: any;
    errorMessage="";  
    
    constructor(
      private formBuilder: FormBuilder,
      private router:Router,
      private toastr: ToastrService
      ) { 
      super()
    }
  
    ngOnInit(): void {

      this.loginForm = this.formBuilder.group({
        username: new FormControl(),
        password: new FormControl()
      });

      this.loginForm.controls.username.setValidators(this.form_validators.required);
      this.loginForm.controls.password.setValidators(this.form_validators.required);

    }
    
    get getControl() {
      return this.loginForm.controls;
    }
    
    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid){
        return
      }   
      console.log(this.usermodel);
      
     if((this.usermodel.username===this.loginForm.value.username)&&(this.usermodel.password===this.loginForm.value.password))
     {
      this.Successtoast()
      this.router.navigate(["/registration"])
     }
     else{
     this.Errortoast()
      
     }

     localStorage.setItem("userlist",JSON.stringify(this.usermodel)) 
    }

    Successtoast() {
      this.toastr.success('Login Sucessfully');
    }

    Errortoast() {
      this.toastr.error('Wrong Credidential ');
    }
  
  }