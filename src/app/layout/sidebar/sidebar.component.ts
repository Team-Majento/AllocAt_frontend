import {Component, Input} from '@angular/core';
import {faCirclePlus, faEye, faFileText, faHouse, faStar} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {ConditionComponent} from "../../condition/condition.component";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sideNavStatus:boolean=false;
  icon2=faHouse;
  icon3=faCirclePlus;
  icon4=faEye;
  icon5=faFileText;
  icon6=faStar;

  icon7=faCheckCircle;
  icon8=faCogs;


userType:string;
  dashboardType:string="";
  constructor(private dialogRef:MatDialog) {
    this.userType=localStorage.getItem("userType")+"";
    if(this.userType=="1"){
      this.dashboardType="admin";
    }else if(this.userType=="2"){
      this.dashboardType="resource-manager"
    }else if(this.userType=="3"){
      this.dashboardType="employee"
    }

  }

  openDialog(){
    this.dialogRef.open(ConditionComponent);
  }

}
