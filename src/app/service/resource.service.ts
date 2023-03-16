import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resource} from "../../models/resource";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl:string=`${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/(**)/${Config.endpoints.prefix.resource}`;
  private apiUrl2:string=`${Config.endpoints.backendApi}/companies/resources-page?page=0&size=20`;
  constructor(private httpClient: HttpClient) {}

  addResource(resource:Resource) : Observable<number>{
    return  this.httpClient.post<number>(this.apiUrl,resource)
  }

  getAllResources(){
    return  this.httpClient.get<object>(this.apiUrl2);
  }

}
