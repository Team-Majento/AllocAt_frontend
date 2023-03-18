import {Component, Input, OnInit} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../change-password/change-password.component";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  userByUserName:any;


  currentUserName:string="";
  constructor(private service: UserService,private dialogRef:MatDialog,private userService:UserService){}



  ngOnInit(): void {
    let currentUserName_ = localStorage.getItem("user-name");
    if(currentUserName_!=""){
      let resp=this.service.getUserByUserName(currentUserName_+"");
      resp.subscribe((data)=>this.userByUserName=data);
    }
    else{
      this.currentUserName=this.userService.getCurrentUserName();
      let resp=this.service.getUserByUserName(this.currentUserName);
      resp.subscribe((data)=>this.userByUserName=data);
    }


  }


  openDialog(){
    this.dialogRef.open(ChangePasswordComponent);
  }
}
