import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


export interface MessageData{
  isError:boolean;
  message:string;
}
@Injectable({
  providedIn: 'root'
})

export class DisplayMessageService {

 private hasMessage$=new BehaviorSubject<MessageData|null>(null);
  public readonly hasMessageSubject=this.hasMessage$.asObservable();

  showSucessMessage(message:string){
    this.hasMessage$.next({
      isError:false,
      message
    })
  }

  showErrorMessage(message:string){
    this.hasMessage$.next({
      isError:true,
      message
    })
  }

  hideMessage(){
    this.hasMessage$.next(null);
  }

}
