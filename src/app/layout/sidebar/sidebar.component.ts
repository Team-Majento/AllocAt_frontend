import {Component, Input} from '@angular/core';
import {faCirclePlus, faEye, faFileText, faHouse, faStar} from "@fortawesome/free-solid-svg-icons";


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



}
