import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  navOpen=false;
  dropDownStatus=false;

  ngOnInit(): void {
  }

  navBarOpen(){
    this.navOpen=!this.navOpen;
  }

  dropDownOpen(){
    this.dropDownStatus=!this.dropDownStatus;
  }
}
