import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLogin} from "../../models/userLogin";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 // private apiUrl:string=`${Config.endpoints.backendApi}/users/`;
  constructor(private httpClient: HttpClient) { }

  login(user:UserLogin) : Observable<boolean>{
    console.log(user.userName);
    console.log(user.password);
    return  this.httpClient.post<boolean>(`${Config.endpoints.backendApi}/users/${user.userName}/${user.password}`,user)
  }

}
