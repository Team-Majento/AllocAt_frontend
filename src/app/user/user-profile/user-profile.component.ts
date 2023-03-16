import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userById:any;
  userId:any;
  constructor(private service: UserService){}



  ngOnInit(): void {
    let resp=this.service.getUserByUserId(1);
    resp.subscribe((data)=>this.userById=data);


  }
}
