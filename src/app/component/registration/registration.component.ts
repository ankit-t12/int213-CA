import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import{Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    AddClientDetails:any = FormGroup;
    arr:any=[] 
    submitted: any;
    errorMessage="";
  
    
    constructor(private formBuilder: FormBuilder,
      private router:Router, private toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.AddClientDetails = this.formBuilder.group({
        first_name: ["", Validators.compose([Validators.required, this.noWhitespaceValidator])],
        last_name: ["", Validators.compose([Validators.required, this.noWhitespaceValidator])],
        age: ["", Validators.compose([Validators.required, this.noWhitespaceValidator])],
        email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), this.noWhitespaceValidator])],
        department: ["", Validators.compose([Validators.required, this.noWhitespaceValidator])],
        phone: ["", Validators.compose([Validators.required, this.noWhitespaceValidator])],
        date: ["", Validators.compose([Validators.required])],
        country: ["", Validators.compose([Validators.required])],
        gender: ["", Validators.compose([Validators.required])],
        playing: [""],
        cooking: [""],
  
      }
     );
     console.log(localStorage.getItem("users")?.length)
     if(localStorage.getItem("users")?.length){
      console.log("hi")
       this.arr= JSON.parse(localStorage.getItem("users")|| "[]")
     }
     this.AddClientDetails.patchValue({gender: "Male",playing:false, cooking:false});

     
    
    }
    public noWhitespaceValidator(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }
    get getControl() {
      return this.AddClientDetails.controls;
    }
    
    onSubmit() {
      
      console.log(this.arr)
      this.submitted = true;
      if (this.AddClientDetails.invalid){
        return
      }
      try{
      this.arr.push(this.AddClientDetails.value)
      }
      catch{
        this.arr=[]
        this.arr.push(this.AddClientDetails.value)
      }
      console.log(this.AddClientDetails.value);
      console.log(this.arr);
      localStorage.setItem("users", JSON.stringify(this.arr ))
      this.toastr.success('Registered Sucessfully');
      this.router.navigate(["datagrid"])
      
      
      
    }
  
  }