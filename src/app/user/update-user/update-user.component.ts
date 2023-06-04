import { Component } from '@angular/core';
// @ts-ignore
import {User} from "../../../models/user";
import {UserRequest} from "../../../models/userRequest";
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  selectedUser!:UserRequest;

  userId!: BigInteger;
  userName!: String;


  constructor(private UserService: UserService, private route: ActivatedRoute) {
    route.params.subscribe(userId => {
      this.userName = localStorage.getItem("userName_") + "";
      const decodedData = atob(this.userName.toString());
      console.log(this.userId)
      if (this.userName == null) {

      } else {
        this.UserService.getUserByUserName(decodedData).subscribe(
          (user) => {
            console.log(user);
            this.selectedUser = <User>user;
          }
          , (error) => {
            console.log(error)
          });
      }
    })

  }

  ngOnInit(): void {

  }


}
