import {Component, Input, ViewChild} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {UserRequest} from "../../models/userRequest";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  @Input()
  user = {} as UserRequest;

  @ViewChild('forgotPasswordForm')
  inputForm!: NgForm;
  selectedResource!: UserRequest;
  emailTo!:string;

  constructor(){}

  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  sendEmail( e: Event) {

    const templateParams = {
      username: this.emailTo,
      // todo
      // password: password,
    };

    emailjs.send('service_rylh2ps', 'template_zjlmq9b', templateParams, 'dK25rP4rfTIYjwl5N')
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        location.reload();
      }, (error) => {
        console.error('Error sending email:', error);
      });


  }
}


