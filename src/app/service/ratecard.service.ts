import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RateCard} from "../../models/rateCard";

@Injectable({
  providedIn: 'root'
})
export class RatecardService {

  constructor(private httpClient: HttpClient) { }

  getRateCardById(rateCardId: number) {
   // http://localhost:8082/Companies/resources/2
    let apiUrl_rateCard:string=`http://localhost:8082/Companies/resources/${rateCardId}`;
    return  this.httpClient.get<RateCard>(apiUrl_rateCard);
  }

}
