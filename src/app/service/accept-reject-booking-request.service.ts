import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AcceptRejectBookingRequestService {

  constructor(private http: HttpClient) {
  }

  getAllBookingRequests() {
    return this.http.get<object>("http://localhost:8082/bookingRequests");
  }


  acceptBookingRequest(bookingRequestId: number, selectedCondition: string) {
    console.log(bookingRequestId);
    return this.http.post<object>(`http://localhost:8082/resourceAllocaion/accept/${bookingRequestId}/${selectedCondition}`, null);
  }

  sendNotificationEmail(userId: number, resourceManagerId: number, status: number, requiredDate: string, startTime: string, endTime: string, resourceId: number) {
    console.log(userId + " " + resourceManagerId + " " + status + " " + requiredDate + " " + startTime + " " + endTime + " " + resourceId);
    return this.http.get<object>(`http://localhost:8082/resourceAllocaion/send-notification-email/${userId}/${resourceManagerId}/${status}/${requiredDate}/${startTime}/${endTime}/${resourceId}`);
  }

  rejectBookingRequest(bookingRequestId: number) {
    console.log(bookingRequestId);
    return this.http.post<object>("http://localhost:8082/resourceAllocaion/reject/" + bookingRequestId, null);
  }
  // getAllAcceptedBookingRequestByUserId(userId:string){
  //   return this.http.get<object>(`http://localhost:8082/resourceAllocaion/allocations/${userId}`);
  // }


  getAllCompanyIdOfTheResourceAllocation(){
    return this.http.get<any[]>("http://localhost:8082/resourceAllocaion/allocations/get-all-companyId");

  }

}
