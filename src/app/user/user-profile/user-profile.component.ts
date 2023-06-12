import {Component} from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../change-password/change-password.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRequest} from "../../../models/userRequest";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  userName!: String;
  selectedUser: any = {};

  jobRole: String = "";

  constructor(private service: UserService, private dialogRef: MatDialog, private route: ActivatedRoute, private router: Router) {


    this.userName = localStorage.getItem("userName_") + "";
    const decodedData = atob(this.userName.toString());
    this.service.getUserByUserName(decodedData).subscribe((user) => {
        console.log(user);
        this.selectedUser = <UserRequest>user;
        this.setTheJobRole(this.selectedUser.userType);


      }
      , (error) => {
        console.log(error)
      });

  }


  openDialog() {
    this.dialogRef.open(ChangePasswordComponent);
  }

  public setTheJobRole(userType: number) {
    if (userType === 1) {
      this.jobRole = "Group Administrator";
    } else if (userType === 2) {
      this.jobRole = "Resource Manager";
    } else if (userType === 3) {
      this.jobRole = "Employee";

    }
  }
}
