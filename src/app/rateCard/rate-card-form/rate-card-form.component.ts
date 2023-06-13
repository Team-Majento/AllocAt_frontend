import {Component, Inject, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RatecardService} from "../../service/ratecard.service";
import {DisplayMessageService} from "../../service/display-message.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {Resource} from "../../../models/resource";
import {RateCard} from "../../../models/rateCard";
import {Location} from "@angular/common";


@Component({
  selector: 'app-rate-card-form',
  templateUrl: './rate-card-form.component.html',
  styleUrls: ['./rate-card-form.component.scss']
})
export class RateCardFormComponent extends FormControlUtil {
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  formTitle = "Form"

  @Input()
  isUpdate=false;


  @Input()
  rateCard = {} as RateCard

  constructor(private rateCardService:RatecardService,private messageService:DisplayMessageService, private location: Location) {
    super();
  }


  submit(InputForm: NgForm) {

  }


  addRateCard() {

    if (this.isFormValid(this.inputForm)) {
        this.rateCardService.addRateCard(this.rateCard).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("RateCard Added-Successfully");
          }
          , error => {
            console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });

      }


  }


  updateRateCard() {
    if (this.isFormValid(this.inputForm)) {
      this.rateCardService.updateRateCard(this.rateCard).subscribe(
        (compileResults) => {
          console.log(compileResults);
          this.messageService.showSucessMessage("RateCard updated-Successfully");
          this.location.back();
        }
        , error => {
          console.log(error)
          this.messageService.showErrorMessage("error occurred");
        });

    }
  }




}
