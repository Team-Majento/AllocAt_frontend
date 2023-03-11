import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Company} from "../../models/company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl:string=`${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}`;
  constructor(private httpClient: HttpClient) {}

  addCompany(company:Company) : Observable<number>{
    console.log(this.apiUrl);
    return  this.httpClient.post<number>(this.apiUrl,company)
  }

}
