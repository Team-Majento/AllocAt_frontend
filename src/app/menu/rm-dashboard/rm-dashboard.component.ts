import { Component } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-rm-dashboard',
  templateUrl: './rm-dashboard.component.html',
  styleUrls: ['./rm-dashboard.component.scss']
})
export class RmDashboardComponent {
  title = 'chartDemo'
  ngOnInit()
  {

    new Chart("myChart", {
      type: 'bar',

      data: {

        labels: ['ABC pvt ltd', 'Thoughtbeat', 'Photobug', 'Fliptune', 'Youobia', 'Snaptags'],
        datasets: [{
          label: '# of Votes',
          data: [6, 8, 4, 6,5, 2],
          backgroundColor:[
            '#043e7d',
            '#046ec4',
            '#5791b3',
            '#0e1e2b',
            '#2e5f78',
            '#51acc5'

          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes:[{
            display:true

          }],
          yAxes: [{
            display:true
            //  beginAtZero: true
          }]
        }
      }
    });
  }
}
