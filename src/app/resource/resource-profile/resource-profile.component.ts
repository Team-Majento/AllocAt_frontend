import {Component} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {ReviewRating} from "../../../models/reviewRating";

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent {
  selectedResource!: Resource;

  reviews!: any;

  resourceId!: string;

  userType:string;

  constructor(private resourceService: ResourceService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.userType=localStorage.getItem("userType")+"";
    route.params.subscribe(resourceId => {
      this.resourceId = resourceId["resourceId"];
      console.log(this.resourceId)
      if (this.resourceId == null) {

      } else {
        this.resourceService.getResourceById(this.resourceId).subscribe(
          (resource) => {
            console.log(resource);
            this.selectedResource = <Resource>resource;
          }
          , (error) => {
            console.log(error)
          });

        this.resourceService.getReviewsByResourceId(this.resourceId).subscribe(
          (reviews) => {
            console.log(reviews);
            this.reviews = <ReviewRating>reviews;
          }
          , (error) => {
            console.log(error)
          });
      }
    })

  }


  addRequest() {
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${this.resourceId}/booking-request`]))
  }

  updateResource() {
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${this.resourceId}/update`]))
  }

  viewBookings() {
    this.router.navigateByUrl(this.router.createUrlTree([`dashboard/view/resources/${this.resourceId}/view-booking-schedule`]))
  }

  goBack() {
    this.location.back();
  }

  getStarsArray(numStars: number): number[] {
    return Array(numStars).fill(0);
  }




}
