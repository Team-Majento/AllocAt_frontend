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
  username="TestUser";
  @Output() sideNavToggle= new EventEmitter<boolean>();
  menuStatus:boolean=false;

  navOpen=false;
  dropDownStatus=false;

  currentUserName:any;

  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    this.currentUserName=this.userService.getCurrentUserName();
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
