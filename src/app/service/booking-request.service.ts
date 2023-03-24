import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private apiUrl2:string=`http://localhost:8082/bookingRequests`;
  constructor(private httpClient: HttpClient) { }


  getAllBookingRequests(){
    return  this.httpClient.get<object>(this.apiUrl2);
  }
}
