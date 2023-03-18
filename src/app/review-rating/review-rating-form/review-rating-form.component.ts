import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-rating-form',
  templateUrl: './review-rating-form.component.html',
  styleUrls: ['./review-rating-form.component.scss']
})

export class ReviewRatingFormComponent implements OnInit{

@Input()
  maxRating=5;
@Input()
 selectedStars=0;
previousSelection=0;
maxRatingArray:any=[];

  ngOnInit(): void {
    this.maxRatingArray=Array(this.maxRating).fill(0);
  }


  HandleMouseEnter(index: number) {
      this.selectedStars=index+1;
  }


  HandleMouseLeave() {
    if(this.previousSelection!==0)
    {
this.selectedStars=this.previousSelection;
    }
    else {
      this.selectedStars=0;
    }
  }

  Rating(index: number) {
this.selectedStars=index+1;
this.previousSelection=this.selectedStars;
    console.log(this.selectedStars)
  }
}
