import {Injectable} from '@angular/core';
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";
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
    return this.httpClient.post<number>(this.apiUrl1, resource)
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
}
