import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config/config';
import { Observable } from 'rxjs';
import { BookingRequest } from '../../models/bookingRequest';
import {Resource} from "../../models/resource";

@Injectable({
  providedIn: 'root',
})
export class BookingRequestService {
  private apiUrl2: string = `http://localhost:8082/bookingRequests`;
  //bookingRequests/


  constructor(private httpClient: HttpClient) {}

  getAllBookingRequests() {
    return this.httpClient.get<object>(this.apiUrl2);
  }

  getAllBookingRequestsByRequestersUserId(userId:string) {
    return this.httpClient.get<object>(`http://localhost:8082/bookingRequests/resource-booking-request/all-booking-requests/${userId}?page=0&size=10`);
  }


  addBookingRequest(bookingRequest: BookingRequest): Observable<number> {
    let apiUrl1 = `http://localhost:8082/bookingRequests`;
    console.log('***');
    console.log(bookingRequest);
    // @ts-ignore
    return this.httpClient.post<number>(apiUrl1, bookingRequest);
  }

  getBookingRequestById(bookingRequestId: string) {

    this.apiUrl2 = `http://localhost:8082/bookingRequests/${bookingRequestId}`
    return this.httpClient.get<BookingRequest>(this.apiUrl2);
  }

  updateBookingRequest(bookingRequest: BookingRequest) {
    console.log("kkkk")

    let apiUrlUpdate = `http://localhost:8082/bookingRequests/${bookingRequest.id}`;

    // @ts-ignore
    //delete resource.companyId;
    console.log("***"+apiUrlUpdate)
    return this.httpClient.put<any>(apiUrlUpdate, bookingRequest)
  }

  getSubBookingRequest() {
    console.log("kkkk")
    var userId = localStorage.getItem("userId") + ""
    let apiUrlGetSubReq = `http://localhost:8082/bookingRequests/resource-booking-request/all-sub-booking-requests/${userId}`;

    // @ts-ignore
    //delete resource.companyId;
    //console.log("***"+apiUrlUpdate)
    return this.httpClient.get<object>(apiUrlGetSubReq)
  }







  getAllNumberOfPendingBookingRequest(){
    return this.httpClient.get<object>(`http://localhost:8082/bookingRequests/resource-booking-request/num-of-pending-booking-request`);

  }

}
