import {Component, Input, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserLogin} from "../../../models/userLogin";
import {ChangePassword} from "../../../models/changePassword";
import {UserService} from "../../service/user.service";
import {FormControlUtil} from "../../../utility/form-control-util";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends FormControlUtil implements OnInit{
  @ViewChild('InputForm')
  inputForm!: NgForm;

  @Input()
  user={} as ChangePassword;

  userByUserName!:any;
  currentUserPassword="";
  intervalSub!:any;

  constructor(private service:UserService) {
    super();
  }






  submit(InputForm:any){

    if (this.isFormValid(this.inputForm)) {
        let currentUserName_ = localStorage.getItem("user-name")+"";
        this.service.ChangeUserPassword(currentUserName_,this.user.confirmPassword);
        console.log(this.currentUserPassword);
        console.log(this.user.currentPassword);

    }

  }
  ngOnInit(): void {
    this.intervalSub=setInterval(()=>{
      let currentUserName_ = localStorage.getItem("user-name");
      let resp=this.service.getUserByUserName(currentUserName_+"");
      resp.subscribe((data)=>this.userByUserName=data);
      this.currentUserPassword=this.userByUserName.password;


    },1000)


  }


}
