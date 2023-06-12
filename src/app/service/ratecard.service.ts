import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  addRateCard(rateCard: RateCard) {
   //    http://localhost:8082/Companies
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    let resourceId=localStorage.getItem('resourceIdForRateCard')+'';
    console.log("recId in ratecard service---->"+ resourceId)
    console.log(rateCard)
    console.log("****")
    let apiUrl_rateCardAdd:string=`http://localhost:8082/Companies/resources/${resourceId}/rateCard`;
    return  this.httpClient.post<number>(apiUrl_rateCardAdd,rateCard,requestOptions);
  }


  updateRateCard(rateCard: RateCard) {
    const tokenParse = localStorage.getItem('jwtToken')+'';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenParse}`);
    console.log(tokenParse);
    const requestOptions = { headers };
    let rateCardId=localStorage.getItem('rateCard')+'';
    //console.log("recId in ratecard service---->"+ resourceId)
    //console.log(rateCard)
   // console.log("****")
    let apiUrl_rateCardUpdate:string=`http://localhost:8082/Companies/resources/ratecard/${rateCardId}`;
    return  this.httpClient.put<RateCard>(apiUrl_rateCardUpdate,rateCard,requestOptions);
  }


}
