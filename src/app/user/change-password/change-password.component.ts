import {Component, Input, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserLogin} from "../../../models/userLogin";
import {ChangePassword} from "../../../models/changePassword";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit,AfterViewInit{
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  user={} as ChangePassword;

  userByUserName!:any;
  currentUserPassword="";

  constructor(private service:UserService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let currentUserName_ = localStorage.getItem("user-name");
    let resp=this.service.getUserByUserName(currentUserName_+"");
    resp.subscribe((data)=>this.userByUserName=data);

  }



  submit(InputForm:any){
    this.currentUserPassword=this.userByUserName.password;
    console.log(this.currentUserPassword);
    console.log(this.user.currentPassword);



  }

}
