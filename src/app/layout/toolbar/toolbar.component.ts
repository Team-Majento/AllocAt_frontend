import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../../service/user.service";
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

  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    const username=localStorage.getItem("userName_")+"";
    const decodedData = atob(username);
    this.currentUserName=decodedData;
    console.log(this.currentUserName);
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
