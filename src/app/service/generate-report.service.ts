import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenerateReportService {

  constructor(private http: HttpClient) {
  }


  generateCompanyWiseReport(companyId: number, fromDate: string, toDate: string) {
    return this.http.post<object>(`http://localhost:8082/resourceAllocatedCost/generate-company-wise-report/${companyId}/${fromDate}/${toDate}`, null);

  }
  generateGeneralReport(fromDate: string, toDate: string) {
    return this.http.post<object>(`http://localhost:8082/resourceAllocatedCost/generate-general-report/${fromDate}/${toDate}`, null);

  }


}
