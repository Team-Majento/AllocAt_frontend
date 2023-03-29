import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserRequest} from "../../models/userRequest";
import {Observable} from "rxjs";

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
    // @ts-ignore
    return this.http.post<number>("http://localhost:8082/users", user)
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


}
