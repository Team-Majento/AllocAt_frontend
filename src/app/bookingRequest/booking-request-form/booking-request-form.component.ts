import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SubSink} from "subsink";
import {BookingRequest} from "../../../models/bookingRequest";
import {BookingRequestService} from "../../service/booking-request.service";
import {DatePipe, Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {UserService} from "../../service/user.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {UserRequest} from "../../../models/userRequest";
import {MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-booking-request-form',
  templateUrl: './booking-request-form.component.html',
  styleUrls: ['./booking-request-form.component.scss']
})
export class BookingRequestFormComponent  extends FormControlUtil {



  flag:boolean=false;
  @Input()
  formTitle = "Form";

  @Input()
  bookingRequest = {} as BookingRequest
  selectedResource!: Resource;
  max="18:00"
  min="09:00"
  minDate = new Date();


  @ViewChild('InputForm')
  inputForm!: NgForm;

  private subSink=new SubSink();
  formData: FormData = new FormData();

  constructor(private userService :UserService ,private bookingReqService:BookingRequestService, private route: ActivatedRoute,private resourceService: ResourceService,private location :Location,private dialogRef: MatDialog,private router: Router,private service: UserService,private messageService:DisplayMessageService) {
    super();
    this.bookingRequest.status="pending";
    ;

    // let currentUserName = this.userService.getCurrentUserName();
    //
    // if (currentUserName == null) {
    //
    // } else {
    //   this.userService.getUserByUserName(currentUserName).subscribe(
    //     (user) => {
    //       console.log(user);
    //       let selectedUser:UserRequest = <UserRequest>user;
    //       this.bookingRequest.requesterUserId=Number(selectedUser.userId);
    //     }
    //     , (error) => {
    //       console.log(error)
    //     });
    // }

    route.params.subscribe(resourceId => {
      this.bookingRequest.resourceId = resourceId["resourceId"];
      console.log(this.bookingRequest.resourceId)
    })
    // if (this.bookingRequest.resourceId == null) {
    //
    // } else {

    //   this.resourceService.getResourceById(String(this.bookingRequest.resourceId)).subscribe(
    //     (resource) => {
    //       console.log(resource);
    //     this.selectedResource=<Resource>resource;
    //     this.bookingRequest.companyId=this.selectedResource.companyId;
    //       console.log(this.selectedResource.company)
    //     }
    //     , (error) => {
    //       console.log(error)
    //     });
    // }
  }
  addBookingRequest() {
    if (this.isFormValid(this.inputForm)) {
      this.bookingReqService.addBookingRequest(this.bookingRequest).subscribe(
        (compileResults) => {
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }
  updateDate() {
    const datePipe = new DatePipe('en-US');
    this.bookingRequest.requiredDate = <string>datePipe.transform(this.bookingRequest.requiredDate, 'yyyy-MM-dd');
  }

  goBack() {
    this.location.back();
  }

  updateBookingRequest() {
    if (this.isFormValid(this.inputForm)) {
      if(this.flag){
        let url_image:string="";
        //this.bookingReqService.uploadImg(this.formData).subscribe(
          //(response: any) => {
            // Handle the server response here
            //console.log('File uploaded successfully!');
            // console.log(response)
            //console.log(response.publicURL)
            //url_image=response.publicURL;


            //this.bookingRequest.imgUrl=url_image;
            //console.log(this.resource)


            this.bookingReqService.updateBookingRequest(this.bookingRequest).subscribe(
              (compileResults) => {
                console.log(compileResults);
                this.messageService.showSucessMessage("resource updated-Successfully");
              }
              , error => {
                console.log(error)
                this.messageService.showErrorMessage("error occurred");
              });
          }
          // (error: any) => {
          //   // Handle any errors that occurred during the upload
          //   //console.error('Error uploading file:', error);
          //  // this.messageService.showErrorMessage("error occurred--Error uploading file");
          // }
      }
      else{

        this.bookingReqService.updateBookingRequest(this.bookingRequest).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("resource updated-Successfully");
          }
          , error => {
            console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });
      }

    }


}
