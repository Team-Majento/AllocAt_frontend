import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})
export class ViewMenuComponent {

  userType:string;
  constructor(private router:Router) {
    this.userType=localStorage.getItem("userType")+"";

  }

  openRequestListView() {
    if(this.userType=="1"){
      this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/booking-requests/myBookings"]));
    }else if(this.userType=="2"){
      this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/booking-requests"]));
    }else if(this.userType=="3"){
      this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/booking-requests/myBookings"]));
    }


  }

  openCompanyView() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/companies"]));
  }

  openResourceView() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/resources"]));
  }
}
