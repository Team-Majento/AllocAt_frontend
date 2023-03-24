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
        
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
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
