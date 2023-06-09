import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../../utility/form-control-util";
import {SubSink} from "subsink";
import {ReviewRatingService} from "../../service/review-rating.service";
import {ReviewRating} from "../../../models/reviewRating";
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-review-rating-form',
  templateUrl: './review-rating-form.component.html',
  styleUrls: ['./review-rating-form.component.scss']
})

export class ReviewRatingFormComponent extends FormControlUtil implements OnInit {

  @Input()
  review = {} as ReviewRating

  @Input()
  maxRating = 5;
  @Input()
  selectedStars = 0;
  previousSelection = 0;
  maxRatingArray: any = [];

  @ViewChild('InputForm')
  inputForm!: NgForm;

  private subSink=new SubSink();
  constructor(private location: Location,private reviewService:ReviewRatingService,private messageService:DisplayMessageService) {
    super();
  }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }


  HandleMouseEnter(index: number) {
    this.selectedStars = index + 1;
  }


  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.selectedStars = this.previousSelection;
    } else {
      this.selectedStars = 0;
    }
  }

  Rating(index: number) {
    this.selectedStars = index + 1;
    this.previousSelection = this.selectedStars;
    // console.log("#*#")
    // console.log(this.selectedStars)
    this.review.rating=this.selectedStars;
  }

  goBack() {
    this.location.back();
  }

  addReview() {
    if (this.isFormValid(this.inputForm)) {
      var user= localStorage.getItem("userName_")+"";
      const decodedData = atob(user.toString());
      this.review.username=decodedData;
      this.subSink.add(
        this.reviewService.addReview(this.review).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("review Added-Sucess");
            this.selectedStars=0;
            this.previousSelection=0
            this.review.reviewText=""
          }
          , error => {
            console.log("error--", error);
            this.messageService.showErrorMessage("error");
          }),
      );
    }
  }
}
