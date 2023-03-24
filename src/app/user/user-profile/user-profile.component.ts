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



  userName:any;
  selectedUser:any={};

  constructor(private service: UserService,private dialogRef:MatDialog,private route: ActivatedRoute,private router:Router){
    route.params.subscribe(userName => {
      this.userName = userName["userName"];
      console.log(this.userName)
      if (this.userName == null) {

      } else {
        this.service.getUserByUserName(this.userName).subscribe(
          (user) => {
            console.log(user);
            this.selectedUser = <UserRequest>user;
          }
          , (error) => {
            console.log(error)
          });
      }
    })
  }



  // ngOnInit(): void {
  //   let currentUserName_ = localStorage.getItem("user-name");
  //   if(currentUserName_!=""){
  //     let resp=this.service.getUserByUserName(currentUserName_+"");
  //     resp.subscribe((data)=>this.userByUserName=data);
  //   }
  //   else{
  //     this.currentUserName=this.service.getCurrentUserName();
  //     let resp=this.service.getUserByUserName(this.currentUserName);
  //     resp.subscribe((data)=>this.userByUserName=data);
  //   }

  //
  // }


  openDialog(){
    this.dialogRef.open(ChangePasswordComponent);
  }
}
