import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserRequest} from "../../models/userRequest";
import {Observable} from "rxjs";
import {Resource} from "../../models/resource";
import {Config} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserName: string = "";

  userRequest = {} as UserRequest;


  constructor(private http: HttpClient) {
  }

  public getUserByUserName(userName: String) {
    return this.http.get("http://localhost:8082/users/getuser/" + userName);
  }

  addUser(user: UserRequest): Observable<number> {
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    // @ts-ignore
    return this.http.post<number>("http://localhost:8082/users", user,requestOptions)
  }

  uploadImg(formData: FormData) {
    let url7:string=`http://localhost:8082/file`;

    return this.http.post<any>(url7,formData);

  }

  public ChangeUserPassword(user: any, password: String) {
    this.userRequest.userId = user.userId;
    this.userRequest.firstName = user.firstName;
    this.userRequest.middleName = user.middleName;
    this.userRequest.lastName = user.lastName;
    this.userRequest.userName = user.userName;
    this.userRequest.password = password;
    this.userRequest.email = user.email;
    this.userRequest.contactNo = user.contactNo;
    this.userRequest.address = user.address;
    this.userRequest.gender = user.gender;
    this.userRequest.imageURL = user.imageURL;
    this.userRequest.userType = user.userType;
    this.userRequest.managersEID = user.managersEID;
    this.userRequest.activeStatus = user.activeStatus;

    return this.http.put<any>("http://localhost:8082/users/update/" + this.userRequest.userId, this.userRequest)
      .subscribe(data => {
        console.log(data);
      });


  }

  updateUser(user: UserRequest) {
    // let apiUrlUpdate = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${Config.endpoints.prefix.resources}/${user.userName}`;
    // @ts-ignore
    let apiUrlUpdateUser= `http://localhost:8082/users/update/${user.userId}`
    //delete resource.companyId;
    console.log(apiUrlUpdateUser)
    return this.http.put<any>(apiUrlUpdateUser, user)
  }

  public getAllUsersCount() {
    return this.http.get<number>("http://localhost:8082/users/getUsersCount/");
  }

  public getAllSubordinatesCount(managerEid:number) {
    console.log("**")
    console.log(managerEid);
    console.log("****")
    return this.http.get<number>(`http://localhost:8082/users/getAllSubordinatesCount/${managerEid}`);
  }


  getRejectBookingRequestCount(){
      return this.http.get<number>(`http://localhost:8082/bookingRequests/resource-booking-request/num-of-rejected-booking-request`);
  }

  getPendingBookingRequestCount() {
    return this.http.get<number>(`http://localhost:8082/bookingRequests/resource-booking-request/num-of-pending-booking-request`);

  }

  getOngoingBookingsCount() {
    return this.http.get<number>(`http://localhost:8082/resourceAllocaion/allocations/ongoing-aalocation-count`);

  }

  totalRejectedCount(userId: string) {
    return this.http.get<number>(`http://localhost:8082/bookingRequests/resource-booking-request/num-of-rejected-booking-request/${userId}`);

  }

  totalPendingCount(userId: string) {
    return this.http.get<number>(`http://localhost:8082/bookingRequests/resource-booking-request/num-of-pending-booking-request/${userId}`);


  }

  getBookingCountById(userId: string) {
    return this.http.get<number>(`http://localhost:8082/bookingRequests/resource-booking-request/all-booking-request-count/${userId}`);

  }
}
