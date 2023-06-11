import {Injectable} from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Resource} from "../../models/resource";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private selectedResourceSubject = new BehaviorSubject<number | null>(null);
  selectedResource$ = this.selectedResourceSubject.asObservable();

  private apiUrl1!: string;
  private apiUrl2!: string ;

  private apiUrl3!: string;


  constructor(private httpClient: HttpClient) {
  }

  addResource(resource: Resource): Observable<number> {
    this.apiUrl1 = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${resource.companyId}/${Config.endpoints.prefix.resource}`;
    // @ts-ignore
    delete resource.companyId;
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };

    return this.httpClient.post<number>(this.apiUrl1, resource,requestOptions)
  }

  getAllResources(page:number) {
    this.apiUrl2=`${Config.endpoints.backendApi}/companies/resources-page?page=${page-1}&size=8`;
    return this.httpClient.get<object>(this.apiUrl2);
  }

  getResourceById(resourceId: string) {

    this.apiUrl3 = `${Config.endpoints.backendApi}/companies/resource/${resourceId}`
    return this.httpClient.get<object>(this.apiUrl3);
  }

  setSelectedResource(resourceId: number) {
    this.selectedResourceSubject.next(resourceId);
  }


  getReviewsByResourceId(resourceId: string) {

    let apiUrl = `http://localhost:8082/companies/resource/${resourceId}/reviews`
    return this.httpClient.get<object>(apiUrl);
  }

  getAllFilteredResources(page: number, companyId: number) {
    let apiUrl4=`${Config.endpoints.backendApi}/companies/filtered-resources-page?page=${page-1}&size=8&company=${companyId}`;
    console.log("**"+apiUrl4)
    return this.httpClient.get<object>(apiUrl4);
  }


  uploadImg(formData: FormData) {
    let url7:string=`http://localhost:8082/file`;

     return this.httpClient.post<any>(url7,formData);

  }


  updateResource(resource: Resource) {
    let apiUrlUpdate = `${Config.endpoints.backendApi}/${Config.endpoints.prefix.company}/${Config.endpoints.prefix.resources}/${resource.id}`;
    // @ts-ignore
    delete resource.companyId;
    console.log("***"+apiUrlUpdate)
    return this.httpClient.put<number>(apiUrlUpdate, resource)
  }

  getAllAllocationsByResourceId(resourceId: string) {
    let url_allocationsByResourceId:string=`http://localhost:8082/resourceAllocaion/allocations/${resourceId}`;
    return this.httpClient.get<any>(url_allocationsByResourceId);
  }


}
