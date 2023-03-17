import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resource} from "../../models/resource";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl1!:string;
  private apiUrl2:string=`${Config.endpoints.backendApi}/companies/resources-page?page=0&size=20`;
  constructor(private httpClient: HttpClient) {}

  addResource(resource:Resource) : Observable<number>{
    this.apiUrl1 = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${resource.companyId}/${Config.endpoints.prefix.resource}`;
    // @ts-ignore
    delete resource.companyId;
    return  this.httpClient.post<number>(this.apiUrl1,resource)
  }

  getAllResources(){
    return  this.httpClient.get<object>(this.apiUrl2);
  }

}
