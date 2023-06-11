import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target as HTMLFormElement)
    emailjs.sendForm('service_fme2a7z', 'template_ssp9ozq', e.target as HTMLFormElement, 'El6uFa2gZTKo5PV1g')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        location.reload();
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
