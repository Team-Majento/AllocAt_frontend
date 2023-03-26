import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  title = 'chartDemo'
  ngOnInit()
  {
    new Chart("myChart", {
      type: 'bar',

      data: {

        labels: ['ABC pvt ltd', 'Thoughtbeat', 'Photobug', 'Fliptune', 'Youobia', 'Snaptags'],
        datasets: [{
          label: '# of Votes',
          data: [6, 8, 4, 6, 0, 2],
          backgroundColor:[
            'rgba(255,99,132,0.4)',
            'rgba(255,45,8,0.9)',
            'rgba(21,255,132,0.5)',
            'rgba(250,243,132,0.8)',
            'rgba(250,143,2,0.8)',
            'rgba(23,243,236,0.8)'

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
