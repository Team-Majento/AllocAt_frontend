import { Injectable } from '@angular/core';
import {Condition} from "../../models/Condition";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  constructor(private httpClient: HttpClient) { }


  addCondition(condition:Condition){
    return this.httpClient.post<number>(`http://localhost:8082/conditions/add-condition`, condition);

  }

}
