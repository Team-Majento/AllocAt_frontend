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
    emailjs.sendForm('service_ppk6y64', 'template_2t8maim', e.target as HTMLFormElement, 'VCG0NZdqW-JAzUun3')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
