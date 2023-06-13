import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {BookingRequestService} from "../../service/booking-request.service";
import {Location} from "@angular/common";
import {UserService} from "../../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRequest} from "../../../models/userRequest";

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  bookingReqList!:any;
  selectedUser: any = {}
  userName!: String;
  totalUsers!:any;

  totalRejectedCount!:any;

  pendingCount!:number;

  bookingCountById!:number;


  ngOnInit()
  {
    this.totalRejectedCountById();
    this.getPendingBookingRequestCount();
    this.getAllUsersCount();
    this.getAllBookingRequests();
    this. getBookingCountById();
    new Chart("myChart", {
      type: 'bar',

      data: {

        labels: ['ABC pvt ltd', 'Thoughtbeat', 'Photobug', 'Fliptune', 'Youobia', 'Snaptags'],
        datasets: [{
          label: 'Number of Bookings',
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

  constructor(private bookingReqService:BookingRequestService,private location:Location,private service: UserService, private dialogRef: MatDialog, private route: ActivatedRoute, private router: Router)
  {
    this.userName = localStorage.getItem("userName_") + "";
    const decodedData = atob(this.userName.toString());
    this.service.getUserByUserName(decodedData).subscribe((user) => {
        console.log(user);
        this.selectedUser = <UserRequest>user;
      }
      , (error) => {
        console.log(error)
      });
  }
  getAllBookingRequests() {
    this.bookingReqService.getAllBookingRequests().subscribe(
      (compileResults) => {
        // @ts-ignore
        this.bookingReqList=compileResults;
        console.log(compileResults);

      }
      , error => {
        console.log(error)
      });

  }

  getAllUsersCount() {
    this.service.getAllUsersCount().subscribe(
      (compileResults) => {
        // @ts-ignore
        const totUsers = compileResults;
        console.log(compileResults);
        this.totalUsers=totUsers;
      }
      , error => {
        console.log(error)
      });
  }

  getPendingBookingRequestCount(){
    var userId=localStorage.getItem("userId")+"";
    this.service.totalPendingCount(userId).subscribe(
      (compileResults) => {

        this.pendingCount=compileResults;
        // @ts-ignore
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      }
    );
  }

  totalRejectedCountById() {
    var userId = localStorage.getItem("userId") + "";
    this.service.totalRejectedCount(userId).subscribe(
      (compileResults) => {

        const totalRejectedCount = compileResults;
        console.log(compileResults);
        this.totalRejectedCount = totalRejectedCount;
        // @ts-ignore
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      }
    );
  }

  getBookingCountById() {
    var userId = localStorage.getItem("userId") + "";
    this.service.getBookingCountById(userId).subscribe(
      (compileResults) => {

        const totalRejectedCount = compileResults;
        console.log(compileResults);
        this.bookingCountById = totalRejectedCount;
        // @ts-ignore
        console.log(compileResults);
      }
      , error => {
        console.log(error)
      }
    );
  }




}
