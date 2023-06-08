import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../utility/form-control-util";
import {SubSink} from "subsink";
import {DisplayMessageService} from "../service/display-message.service";
import {LoginService} from "../service/login.service";
import {UserLogin} from "../../models/userLogin";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {ChangePasswordComponent} from "../user/change-password/change-password.component";
import {MatDialog} from "@angular/material/dialog";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";


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

  currentUserName:String="";

  constructor(private loginService: LoginService,private dialogRef: MatDialog,private messageService:DisplayMessageService,private router:Router,private userService:UserService) {
    super();
  }

  openDialog() {
    this.dialogRef.open(ForgotPasswordComponent,
    {width:'350px',
    })
  }

  login(){

    if (this.isFormValid(this.inputForm)) {
      this.subSink.add(
        this.loginService.login_new(this.user).subscribe(
          (compileResults) => {

            // saving current user password to local storage
            this.currentUserName=this.user.userName;

            const encodedData = btoa(this.currentUserName.toString());
            localStorage.setItem("userName_",encodedData);

            console.log("abc")
            console.log(compileResults.jwtToken);

            localStorage.setItem("userType",compileResults.user.userType);

            localStorage.setItem("jwtToken",compileResults.jwtToken);

            this.messageService.showSucessMessage("login-Sucess");

            if(compileResults.user.userType==3){
              this.router.navigateByUrl(this.router.createUrlTree(["dashboard/main/employee"]))
            }
            else if(compileResults.user.userType==2){
              this.router.navigateByUrl(this.router.createUrlTree(["dashboard/main/resource-manager"]))

            }
            else if(compileResults.user.userType==1){
              this.router.navigateByUrl(this.router.createUrlTree(["dashboard/main/admin"]))

            }


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
