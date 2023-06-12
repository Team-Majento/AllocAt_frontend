import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChangePassword} from "../../../models/changePassword";
import {UserService} from "../../service/user.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {ChangePwdServiceService} from "../../service/change-pwd-service.service";
import {catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../../service/display-message.service";
import {ConfirmationDialogComponent} from "../../confirmation-dialog/confirmation-dialog.component";




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


  constructor(private service: UserService,private change_pwd_service: ChangePwdServiceService, private router: Router,private dialogRef: MatDialog,private messageService:DisplayMessageService) {
    super();

  }


  // submit(InputForm: any) {
  //
  //   if (this.isFormValid(this.inputForm)) {
  //     this.service.ChangeUserPassword(this.userByUserName, this.user.confirmPassword);
  //     console.log(this.currentUserPassword);
  //     console.log(this.user.currentPassword);
  //
  //   }
  //
  // }
  //
  // ngOnInit(): void {
  //
  //   let currentUserName_ = localStorage.getItem("userName_") + "";
  //   const decodedData = atob(currentUserName_);
  //   let resp = this.service.getUserByUserName(decodedData);
  //   // resp.subscribe((data) => {this.userByUserName = data;this.currentUserPassword = this.userByUserName.password;});
  //   resp.pipe(
  //     map((data) => {
  //       this.userByUserName = data;
  //       this.currentUserPassword = this.userByUserName.password;
  //     }),
  //     catchError((error) => {
  //       // Handle error here
  //       console.error('Error occurred:', error);
  //       return of(null); // Provide a fallback value or handle the error gracefully
  //     })
  //   ).subscribe();
  //   // setTimeout(() => {
  //   //   this.currentUserPassword = this.userByUserName.password;
  //   //
  //   // }, 1000)
  //
  // }
  //
  get passwordMatch(): boolean {
    if (!this.user.currentPassword || !this.currentUserPassword) {
      return false;
    }
    return this.change_pwd_service.comparePasswords(this.user.currentPassword, this.currentUserPassword);
  }




  submit(InputForm: any) {

    const result = window.confirm('Are you sure you want to proceed with the password change?');

    if (result) {
      if (this.isFormValid(InputForm)) {
        console.log(this.currentUserPassword);
        console.log(this.user.currentPassword);
        this.passwordMatch;
        this.service.ChangeUserPassword(this.userByUserName, this.user.confirmPassword);
        this.inputForm.resetForm();
        this.dialogRef.closeAll();
        this.messageService.showSucessMessage("Password Changed Successfully");
      }
    }

  }



  ngOnInit(): void {
    this.fetchUserByUserName();
  }

  fetchUserByUserName(): void {
    let currentUserName_ = localStorage.getItem("userName_") + "";
    const decodedData = atob(currentUserName_);
    let resp = this.service.getUserByUserName(decodedData);

    resp.pipe(
      map((data) => {
        this.userByUserName = data;
        this.currentUserPassword = this.userByUserName.password;
      }),
      catchError((error) => {
        console.error('Error occurred:', error);
        return of(null);
      })
    ).subscribe();
  }
}
