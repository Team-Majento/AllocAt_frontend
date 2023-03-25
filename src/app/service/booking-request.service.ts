import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../../config/config";
import {Observable} from "rxjs";
import {BookingRequest} from "../../models/bookingRequest";

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private apiUrl2:string=`http://localhost:8082/bookingRequests`;
  constructor(private httpClient: HttpClient) { }


  getAllBookingRequests(){
    return  this.httpClient.get<object>(this.apiUrl2);
  }

  addBookingRequest(bookingRequest: BookingRequest) : Observable<number>{
    let apiUrl1 = `http://localhost:8082/bookingRequests`;
    console.log("***");
    console.log(bookingRequest);
    // @ts-ignore
    return  this.httpClient.post<number>(apiUrl1,bookingRequest)


  }
}
