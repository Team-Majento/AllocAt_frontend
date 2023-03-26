import {Component, Input, ViewChild} from '@angular/core';
import {UserRequest} from "../../../models/userRequest";
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../../utility/form-control-util";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends FormControlUtil{

  constructor(private service:UserService) {
    super();
  }
  // emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  // passwordPtn ="^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$"
  // mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
  @Input()
  formTitle="form";

  @Input()
  user = {} as UserRequest;

  @ViewChild('InputForm')
  inputForm!: NgForm;
  passwordPtn ='^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"

  addUser() {
    console.log(this.user)
    if (this.isFormValid(this.inputForm)) {
      console.log("*")
      this.service.addUser(this.user).subscribe(
        (compileResults) => {
          console.log("#")
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }


}
