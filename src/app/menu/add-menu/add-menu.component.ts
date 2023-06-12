import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {

  userType:string;

  constructor(private router:Router) {
    this.userType=localStorage.getItem("userType")+"";

  }
  openAddCompanyForm() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/add/company"]));
  }


  openAddResourceForm() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/add/resource"]));
  }

  openAddUserForm() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/add/user"]));
  }

  openAddRoleForm() {
    this.router.navigateByUrl(this.router.createUrlTree(["dashboard/add/role"]));
  }
}
