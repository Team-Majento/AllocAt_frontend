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


  acceptBookingRequest(bookingRequestId: BigInt) {
    console.log(bookingRequestId);
    return this.http.post<object>("http://localhost:8082/resourceAllocaion/accept/" + bookingRequestId, null);
  }
}
