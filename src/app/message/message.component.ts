import {Component, OnDestroy} from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import {DisplayMessageService} from "../service/display-message.service";
import {DisplayMessageComponent} from "./display-message/display-message.component";
import {SubSink} from "subsink";

@Component({
  selector: 'app-message',
  template: ''
})
export class MessageComponent implements OnDestroy{

  private subSink=new SubSink();
  constructor(private dialog: MatDialog,private messageService:DisplayMessageService) {
    this.subSink.add(
    this.messageService.hasMessageSubject.subscribe((messageData)=> {
    if(messageData != null){
      this.dialog.open(DisplayMessageComponent, {
        data: messageData
      }).afterClosed().subscribe(() => {
        this.messageService.hideMessage();
      });
    }

    })
    )
  }

  ngOnDestroy(): void {
       this.subSink.unsubscribe();
    }

}
