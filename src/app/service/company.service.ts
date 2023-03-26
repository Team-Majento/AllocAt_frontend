import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
import {Company} from "../../models/company";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl:string=`${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}`;
  private apiUrl2:string=`${Config.endpoints.backendApi}/companies`;

  constructor(private httpClient: HttpClient) {}

  addCompany(company:Company) : Observable<number>{
    console.log(this.apiUrl);
    return  this.httpClient.post<number>(this.apiUrl,company);
  }

  getCompanyNames(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl2)
  }


  getAllCompanies() {
    return  this.httpClient.get<object>(this.apiUrl2);
  }
}
