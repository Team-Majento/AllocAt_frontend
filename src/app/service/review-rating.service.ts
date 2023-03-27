import { Injectable } from '@angular/core';
import {ReviewRating} from "../../models/reviewRating";
import {Config} from "../../config/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewRatingService {

  constructor(private httpClient: HttpClient) { }

  addReview(review: ReviewRating) {
    let apiUrl:string=`http://localhost:8082/resources/${review.resourceId}/review`;
    // @ts-ignore
    delete review.resourceId;
    return  this.httpClient.post<number>(apiUrl,review);
  }
}
