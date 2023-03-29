import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../../service/user.service";
import {UserRequest} from "../../../models/userRequest";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  icon1=faBars;
  @Output() sideNavToggle= new EventEmitter<boolean>();
  menuStatus:boolean=false;

  navOpen=false;
  dropDownStatus=false;

  currentUserName:String="";

  userImg:string="";

  currentUser: any ={} ;

  constructor(private userService:UserService) {
    const username=localStorage.getItem("userName_")+"";
    const decodedData = atob(username);
    this.currentUserName=decodedData;
    this.userService.getUserByUserName( this.currentUserName).subscribe((user) => {
        this.currentUser = <UserRequest>user;
        this.userImg=this.currentUser.imageURL;
      }
      , (error) => {
        console.log(error)
      });;
  }
  ngOnInit(): void {

  }

  navBarOpen(){
    this.navOpen=!this.navOpen;
  }

  dropDownOpen(){
    this.dropDownStatus=!this.dropDownStatus;
  }

  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus);
  }


}
