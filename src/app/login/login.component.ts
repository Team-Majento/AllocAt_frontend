import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../utility/form-control-util";
import {SubSink} from "subsink";
import {DisplayMessageService} from "../service/display-message.service";
import {LoginService} from "../service/login.service";
import {UserLogin} from "../../models/userLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormControlUtil implements OnInit,OnDestroy {
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  user={} as UserLogin;
  private subSink=new SubSink();

  constructor(private loginService: LoginService,private messageService:DisplayMessageService) {
    super();
  }

  login(){
    if (this.isFormValid(this.inputForm)) {
      this.subSink.add(
        this.loginService.login(this.user).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("login-Sucess");
          }
          , error => {
            console.log("error--",error);
            this.messageService.showErrorMessage("login failed");
          }),
      );
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  ngOnInit(): void {
  }

}
