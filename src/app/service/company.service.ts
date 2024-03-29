import { Injectable } from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../../models/company";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Resource} from "../../models/resource";

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
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    //console.log(this.apiUrl);
    return  this.httpClient.post<number>(this.apiUrl,company,requestOptions);
  }

  unlistCompany(companyId:string){
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    let unlistCom:string=`http://localhost:8082/companies/${companyId}`;
    return this.httpClient.delete<boolean>(unlistCom,requestOptions);
  }



  uploadImg(formData: FormData) {
    let url7:string=`http://localhost:8082/file`;

    return this.httpClient.post<any>(url7,formData);

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

  updateCompany(company: Company) {
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    // http://localhost:8082/companies/2
    //   http://localhost:4200/companies/[object
      let apiUrlUpdate = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${company.id}`;
    // @ts-ignore
    // delete companyId;
    console.log("***"+apiUrlUpdate)
    return this.httpClient.put<number>(apiUrlUpdate, company,requestOptions)
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
