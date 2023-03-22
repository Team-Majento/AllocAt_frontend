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
  @Input()
  formTitle="form";

  @Input()
  user = {} as UserRequest;

  @ViewChild('InputForm')
  inputForm!: NgForm;

  addUser() {
    if (this.isFormValid(this.inputForm)) {
      this.service.addUser(this.user).subscribe(
        (compileResults) => {
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }


}
