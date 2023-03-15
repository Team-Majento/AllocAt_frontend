import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../utility/form-control-util";
import {SubSink} from "subsink";
import {DisplayMessageService} from "../service/display-message.service";
import {LoginService} from "../service/login.service";
import {UserLogin} from "../../models/userLogin";
import {Router} from "@angular/router";


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

  constructor(private loginService: LoginService,private messageService:DisplayMessageService,private router:Router) {
    super();
  }

  login(){
    if (this.isFormValid(this.inputForm)) {
    //   this.subSink.add(
    //     this.loginService.login(this.user).subscribe({
    //       next: (compileResults) => {
    //         console.log(compileResults);
    //         this.messageService.showSucessMessage("login-Sucess");
    //         this.router.navigateByUrl(this.router.createUrlTree([""]))
    //       },
    //       error: (e) =>{
    //         console.log("error-",e);
    //         this.messageService.showErrorMessage("login failed");
    //       }
    //     })
    //   );
    // }
      this.subSink.add(
        this.loginService.login(this.user).subscribe(
          (compileResults) => {
            console.log("abc")
            console.log(compileResults);
            this.messageService.showSucessMessage("login-Sucess");
            this.router.navigateByUrl(this.router.createUrlTree(["dashboard"]))
          }
          , error => {
            console.log("error--");
            this.messageService.showErrorMessage("error-login failed");
          }),
      );
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  ngOnInit(): void {
    this.messageService.showSucessMessage("loss");
  }

}
