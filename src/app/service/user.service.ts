import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserName:string="";

  constructor(private http:HttpClient) { }

  public getUserByUserName(userName:string){
    return this.http.get("http://localhost:8082/users/getuser/"+userName);
  }

  setCurrentUserName(data:string){
        this.currentUserName=data;
  }
  getCurrentUserName(){
        return this.currentUserName;
  }
}
