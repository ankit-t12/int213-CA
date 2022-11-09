import { Validators} from '@angular/forms';

export class UserModel{
    userId: string="";
    firstName:string="";  
    lastName:string="";
    email:string="";
    pswd:string="";
    profilePic:string="";
    contactNumber:string="";
    displayName:string = this.firstName+" "+this.lastName 
}
export class ValidatorsModel{
    required =Validators.required
    contact_number = Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
   
}

