import { Component } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {UserRequest} from "../../models/userRequest";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  selectedResource!: UserRequest;
  email:string='';

  userName !: string;

  password !: string;

  constructor(){}

  sendEmail( e: Event) {
    // Retrieve the username, password, and login page link from the database
    const username = this.userName;
    const password = this.password;
    const loginLink = 'http://localhost:4200/login';

    // Send the email using Email.js
    const templateParams = {
      username: username,
      password: password,
      login_link: loginLink
    };

    emailjs.send('service_fgfrip8', 'template_6eprlya', templateParams, 'El6uFa2gZTKo5PV1g')
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        location.reload();
      }, (error) => {
        console.error('Error sending email:', error);
      });
  }



}


