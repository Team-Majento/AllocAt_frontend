import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {BookingRequestService} from "../../service/booking-request.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  bookingReqList:any=[];


  ngOnInit()
  {
    this.getAllBookingRequests();
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
            display:true,
             // beginAtZero: true
          }]
        }
      }
    });
  }

  constructor(private bookingReqService:BookingRequestService,private location:Location) {
  }
  getAllBookingRequests() {
    this.bookingReqService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        const content = compileResults;
        console.log(compileResults);
        this.bookingReqList=content;
      }
      , error => {
        console.log(error)
      });

  }

}
