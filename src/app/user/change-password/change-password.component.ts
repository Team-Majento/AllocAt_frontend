import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserLogin} from "../../../models/userLogin";
import {ChangePssword} from "../../../models/changePssword";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  user={} as ChangePssword;

  submit(InputForm:any){

  }

}
