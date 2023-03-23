import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})
export class ViewMenuComponent {

  constructor(private router:Router) {
  }

  openRequestListView() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/booking-requests"]));
  }

  openCompanyView() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/companies"]));
  }

  openResourceView() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/view/resources"]));
  }
}
