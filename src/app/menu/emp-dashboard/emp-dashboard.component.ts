import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {BookingRequestService} from "../../service/booking-request.service";
import {Location} from "@angular/common";
import {UserService} from "../../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRequest} from "../../../models/userRequest";
import {BookingRequest} from "../../../models/bookingRequest";

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  bookingReqList!:BookingRequest[];
  selectedUser: any = {}
  userName!: String;
  totalUsers!:any;

  totalRejectedCount!:any;

  pendingCount!:number;

  bookingCountById!:number;

  resourceCountCompany1!:number;
  resourceCountCompany2!:number;
  resourceCountCompany3!:number;
  resourceCountCompany4!:number;
  resourceCountCompany5!:number;
  resourceCountCompany6!:number;


  ngOnInit()
  {
    this.totalRejectedCountById();
    this.getPendingBookingRequestCount();
    this.getAllUsersCount();
    this.getAllBookingRequests();
    this. getBookingCountById();
    this.getResourceCountCompany1();
    this.getResourceCountCompany2();
    this.getResourceCountCompany3();
    this.getResourceCountCompany4();
    this.getResourceCountCompany5();
    this.getResourceCountCompany6();

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

  getResourceCountCompany1(){
    this.service.getResourceCountCompany1().subscribe(
      (compileResults) => {

        this.resourceCountCompany1 = compileResults;
        // @ts-ignore
        console.log("*"+compileResults);
      }
      , error => {
        console.log(error)
      }
    );
  }

  getResourceCountCompany2(){
    this.service.getResourceCountCompany2().subscribe(
      (compileResults) => {

        this.resourceCountCompany2 = compileResults;
        // @ts-ignore
        console.log(compileResults);
        console.log("#")
      }
      , error => {
        console.log(error)
      }
    );
  }

  getResourceCountCompany3(){
    this.service.getResourceCountCompany3().subscribe(
      (compileResults) => {

        this.resourceCountCompany3 = compileResults;
        // @ts-ignore
      }
    );
  }

  getResourceCountCompany4(){
    this.service.getResourceCountCompany4().subscribe(
      (compileResults) => {

        this.resourceCountCompany4 = compileResults;
        // @ts-ignore
      }
    );
  }

  getResourceCountCompany5(){
    this.service.getResourceCountCompany5().subscribe(
      (compileResults) => {

        this.resourceCountCompany5 = compileResults;
        // @ts-ignore
      }
    );
  }

  getResourceCountCompany6(){
    this.service.getResourceCountCompany6().subscribe(
      (compileResults) => {

        this.resourceCountCompany6 = compileResults;
        // @ts-ignore
        let chartData: number[] = [];


        chartData.push(this.resourceCountCompany1);//[10, 20, 30, 40, 50]
        chartData.push(this.resourceCountCompany2);//[10, 20, 30, 40, 50]
        chartData.push(this.resourceCountCompany3);//[10, 20, 30, 40, 50]
        chartData.push(this.resourceCountCompany4);//[10, 20, 30, 40, 50]
        chartData.push(this.resourceCountCompany5);//[10, 20, 30, 40, 50]
        chartData.push(this.resourceCountCompany6);//[10, 20, 30, 40, 50]
        chartData.push(0);//[10, 20, 30, 40, 50]

        // scores.push( 'abc' );	 //data.ts(24,14): error TS2345: Argument of type '"abc"' is not
        //assignable to parameter of type 'number'.
        // console.log("######")
        // console.log(this.resourceCountCompany1)
        // console.log(this.resourceCountCompany2)
        // console.log(chartData); // Output: [1, 2, 3]
        // console.log("#####")

        new Chart("myChart", {
          type: 'bar',

          data: {

            labels: ['ABC pvt ltd', 'Thoughtbeat', 'Photobug', 'Fliptune', 'Youobia', 'Snaptags'],
            datasets: [{
              label: 'Number of Active Resources',
              data: chartData,
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
    );
  }




}
