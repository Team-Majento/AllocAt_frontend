import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MessageData} from "../../service/display-message.service";

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MessageData) {

  }
}
