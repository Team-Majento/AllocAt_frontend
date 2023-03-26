import {Component, Input, OnInit} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../change-password/change-password.component";
import {Resource} from "../../../models/resource";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRequest} from "../../../models/userRequest";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent  {

  userName!:String;
  selectedUser:any={};

  constructor(private service: UserService,private dialogRef:MatDialog,private route: ActivatedRoute,private router:Router){


    this.userName=localStorage.getItem("userName_")+"";
    const decodedData = atob(this.userName.toString());
    this.service.getUserByUserName(decodedData).subscribe((user) => {
            console.log(user);
            this.selectedUser = <UserRequest>user;
          }
          , (error) => {
            console.log(error)
    });


  }

  openDialog(){
    this.dialogRef.open(ChangePasswordComponent);
  }
}
