import {Component, Input, OnInit, Output} from '@angular/core';
import {AcceptRejectBookingRequestService} from "../../service/accept-reject-booking-request.service";
import {ConditionService} from "../../service/condition.service";
import {Condition} from "../../../models/Condition";
import {Resource} from "../../../models/resource";

@Component({
  selector: 'app-accept-reject-booking-request',
  templateUrl: './accept-reject-booking-request.component.html',
  styleUrls: ['./accept-reject-booking-request.component.scss']
})
export class AcceptRejectBookingRequestComponent implements OnInit {

  selectedCondition!:any;


  @Output()
  bookingRequestList: any = [];

  conditions: any;

  @Input()
  condition = {} as Condition;

  constructor(private acceptRejectBookingRequestService: AcceptRejectBookingRequestService,private  conditionService:ConditionService) {

  }

  ngOnInit(): void {
    this.getAllBookingRequests();
    this.conditionService.getConditionNames().subscribe(
      condition => {
        this.conditions = condition;

      },
      error => console.error(error)
    );
  }

  getAllBookingRequests() {
    this.acceptRejectBookingRequestService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;

        this.bookingRequestList = content;

        this.bookingRequestList = this.bookingRequestList.filter(this.isPending);
        console.log(this.bookingRequestList);
      }
      , error => {
        console.log(error)
      });

  }

  accept(bookingRequestId: number, requesterUserId: number, requestersManagersUserId: number, requiredDate: string, startTime: string, endTime: string, resourceId: number) {
    console.log(bookingRequestId);
    this.acceptRejectBookingRequestService.acceptBookingRequest(bookingRequestId,this.selectedCondition).subscribe(
      (compileResults) => {
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      });
    this.selectedCondition=null;

    let index = this.bookingRequestList.findIndex((e: any) => e.id === bookingRequestId);
    this.bookingRequestList.splice(index, 1);

    //status set to 1
    this.acceptRejectBookingRequestService.sendNotificationEmail(requesterUserId,requestersManagersUserId,1,requiredDate,startTime,endTime,resourceId).subscribe();


  }

  isPending(element: any) {
    return (element.status === "pending"|| element.status === "Pending");
  }

  reject(bookingRequestId: number, requesterUserId: number, requestersManagersUserId: number, requiredDate: string, startTime: string, endTime: string , resourceId: number) {
    this.acceptRejectBookingRequestService.rejectBookingRequest(bookingRequestId).subscribe(
      (compileResults) => {
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      });

    let index = this.bookingRequestList.findIndex((e: any) => e.id === bookingRequestId);
    this.bookingRequestList.splice(index, 1);

    this.acceptRejectBookingRequestService.sendNotificationEmail(requesterUserId,requestersManagersUserId,-1,requiredDate,startTime,endTime,resourceId).subscribe();

  }

  onConditionSelectionChange(selectedCondition: any): void {
    this.selectedCondition = selectedCondition;
  }
}
