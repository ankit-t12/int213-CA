import { UserModel } from "./models/user.model";
export class FakeDb {
   

    public User: Array<UserModel> = new Array<UserModel>()

    constructor() {
        // load dummy  user
        for (let index = 0; index < 10; index++) {
            var c = (index + 1).toString();
            let user = new UserModel();
            user.userId = c+21;
            user.firstName = "The Obeoi Group" + c;
            user.profilePic = "/assets/temp-data/company-logo.jpeg";
            user.contactNumber = "+1  (563) 264-2443";
            user.email = "oberai@email.com";
            user.pswd="12"+c;
    
        }
        
    }   
    
    public get_current_user(email:string,pswd:string): UserModel {
        return this.User[0];
      }
    

}
