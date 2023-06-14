import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {UserRequest} from "../../models/userRequest";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user = {} as UserRequest;

  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target as HTMLFormElement)
    emailjs.sendForm('service_g7m8qs8', 'template_u588phk', e.target as HTMLFormElement, 'dK25rP4rfTIYjwl5N')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        location.reload();
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
