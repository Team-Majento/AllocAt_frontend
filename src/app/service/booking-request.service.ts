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
    console.log(222222)
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

    this.apiUrl2 = `${Config.endpoints.backendApi}/bookingRequests/${bookingRequestId}`
    return this.httpClient.get<object>(this.apiUrl2);
  }

  updateBookingRequest(resource: Resource) {
    let apiUrlUpdate = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${Config.endpoints.prefix.resources}/${resource.id}`;
    // @ts-ignore
    delete resource.companyId;
    console.log("***"+apiUrlUpdate)
    return this.httpClient.put<number>(apiUrlUpdate, resource)
  }
}
