import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChangePassword} from "../../../models/changePassword";
import {UserService} from "../../service/user.service";
import {FormControlUtil} from "../../../utility/form-control-util";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends FormControlUtil implements OnInit {
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  user = {} as ChangePassword;

  userByUserName!: any;
  currentUserPassword = "";

  constructor(private service: UserService) {
    super();

  }


  submit(InputForm: any) {

    if (this.isFormValid(this.inputForm)) {
      this.service.ChangeUserPassword(this.userByUserName, this.user.confirmPassword);
      console.log(this.currentUserPassword);
      console.log(this.user.currentPassword);

    }

  }

  ngOnInit(): void {

    let currentUserName_ = localStorage.getItem("userName_") + "";
    const decodedData = atob(currentUserName_);
    let resp = this.service.getUserByUserName(decodedData);
    resp.subscribe((data) => this.userByUserName = data);
    setTimeout(() => {
      this.currentUserPassword = this.userByUserName.password;
    }, 1000)


  }


}
