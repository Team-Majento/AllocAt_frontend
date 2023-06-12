import { Component } from '@angular/core';
import {RatecardService} from "../../service/ratecard.service";
import {RateCard} from "../../../models/rateCard";

@Component({
  selector: 'app-update-rate-card',
  templateUrl: './update-rate-card.component.html',
  styleUrls: ['./update-rate-card.component.scss']
})
export class UpdateRateCardComponent {
  selectedRateCard!:RateCard;
  constructor(private rateCardService: RatecardService) {
    var rateCard=localStorage.getItem('rateCard')+'';
      if (rateCard == null) {
      } else {
        this.rateCardService.getRateCardById(Number(rateCard)).subscribe(
          (result) => {
            console.log(result);
            this.selectedRateCard = <RateCard>result;
          }
          , (error) => {
            console.log(error)
          });
      }
    }

  }



