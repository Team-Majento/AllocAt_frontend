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
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

@Component({
  selector: 'app-booking-request-form',
  templateUrl: './booking-request-form.component.html',
  styleUrls: ['./booking-request-form.component.scss']
})
export class BookingRequestFormComponent  extends FormControlUtil {

  @Input()
  formTitle = "Form";
  @Input()
  isUpdateForm : boolean | undefined;


  @Input()
  bookingRequest = {} as BookingRequest
 // selectedResource!: Resource;
  max="18:00"
  min="09:00"
  minDate = new Date();
  IdPattern = "^[1-9][0-9]*$"

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

  }
  addBookingRequest() {
    if (this.isFormValid(this.inputForm)) {
      this.bookingReqService.addBookingRequest(this.bookingRequest).subscribe(
        (compileResults) => {
          console.log(compileResults);
          this.messageService.showSucessMessage("booking request added-Successfully");
        }
        , error => {
          console.log(error);
          this.messageService.showErrorMessage("error occurred");
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
      console.log(this.bookingRequest)
      this.bookingReqService.updateBookingRequest(this.bookingRequest).subscribe(
        (compileResults) => {
          console.log(compileResults);
          let updatedReq=<BookingRequest>compileResults;
           this.sendEmail(updatedReq.id,updatedReq.startTime,updatedReq.endTime,updatedReq.requiredDate);
           this.messageService.showSucessMessage("booking request updated-Successfully");
          },
          error => {
          console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });
          }
  }

  sendEmail(id:number,startTime:string,endTime:string,date:string ) {
    const templateParams = {
      id: id,
      startTime: startTime,
      endTime:endTime,
      date: date
    };

    emailjs.send('service_j5oevya', 'template_qt9epkl', templateParams, 'Q39eTsMf3eV9YPX9S')
      .then((response) => {

        console.log('Email sent!', response.status, response.text);
        location.reload();
      }, (error) => {
        console.error('Error sending email:', error);
      });
  }
}
