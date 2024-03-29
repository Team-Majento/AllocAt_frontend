import {Component} from '@angular/core';
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {ReviewRating} from "../../../models/reviewRating";
import {RateCard} from "../../../models/rateCard";
import {RatecardService} from "../../service/ratecard.service";
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-resource-profile',
  templateUrl: './resource-profile.component.html',
  styleUrls: ['./resource-profile.component.scss']
})
export class ResourceProfileComponent {
  selectedResource!: Resource;

  rateCardOfSelectedResource!:RateCard;

  reviews!: any;

  resourceId!: string;

  userType:string;
  resourceType: string | undefined;

  constructor(private resourceService: ResourceService, private route: ActivatedRoute, private router: Router, private location: Location,private rateCardService:RatecardService,private messageService:DisplayMessageService) {
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
           if(this.selectedResource.resourceType===1){
             this.resourceType="Cubicle";
           } if(this.selectedResource.resourceType===2){
             this.resourceType="Meeting Room";
           } if(this.selectedResource.resourceType===3){
             this.resourceType="Conference Room";
           } if(this.selectedResource.resourceType===4){
             this.resourceType="Lounge Area";
           }
            if(this.selectedResource.rateCardId!= null){
              this.rateCardService.getRateCardById(this.selectedResource.rateCardId).subscribe(
                (rateCard)=>{
                  console.log(rateCard)
                  this.rateCardOfSelectedResource=rateCard;
                },
                (error)=>{
                  console.log(error)
                }
              );


            }


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


  unlistResource() {
        this.resourceService.unlistResource(this.resourceId).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("Resource Deleted");
            this.location.back();
          }
          , error => {
            console.log("error--",error);
            this.messageService.showErrorMessage("Failed to Delete Resource");
          })


  }

}
