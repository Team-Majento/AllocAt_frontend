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
  constructor(private httpClient: HttpClient) {}

  addResource(resource:Resource) : Observable<number>{
    return  this.httpClient.post<number>(this.apiUrl,resource)
  }
}
