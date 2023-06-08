import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../../models/company";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private selectedCompanySubject = new BehaviorSubject<number|null>(null);
  selectedCompany$ = this.selectedCompanySubject.asObservable();
  private apiUrl:string=`${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}`;
  private apiUrl2:string=`${Config.endpoints.backendApi}/companies`;

  constructor(private httpClient: HttpClient) {}

  addCompany(company:Company) : Observable<number>{
    //console.log(this.apiUrl);
    return  this.httpClient.post<number>(this.apiUrl,company);
  }

  getCompanyNames(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl2)
  }


  getAllCompanies() {
    return  this.httpClient.get<object>(this.apiUrl2);
  }

  setSelectedCompany(companyId: number) {
    this.selectedCompanySubject.next(companyId);

  }

  getCompanyById(companyId: string) {

    // let apiUrl3=`${Config.endpoints.backendApi}/companies/${companyId}`
    // const headers = new Headers();
    // let tokenParse = JSON.parse( localStorage.getItem("jwtToken")+"");
    // headers.append('Authorization', `Bearer ${tokenParse}`);
    // const requestOptions = { headers: headers };
    //
    // return  this.httpClient.get<object>(apiUrl3, requestOptions);

    const apiUrl = `${Config.endpoints.backendApi}/companies/${companyId}`;
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };

    return this.httpClient.get<object>(apiUrl, requestOptions);

  }
}
