import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLogin} from "../../models/userLogin";
import {UserRequest} from "../../models/userRequest";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 // private apiUrl:string=`${Config.endpoints.backendApi}/users/`;
  constructor(private httpClient: HttpClient) { }

  login(user:UserLogin) : Observable<boolean>{
    console.log(user.userName);
    console.log(user.userPassword);
    return  this.httpClient.post<boolean>(`${Config.endpoints.backendApi}/users/${user.userName}/${user.userPassword}`,user)
  }

  login_new(user:UserLogin):Observable<any>{
    console.log(user);
    return  this.httpClient.post<any>(`http://localhost:8082/authenticate`,user)


  }




}
