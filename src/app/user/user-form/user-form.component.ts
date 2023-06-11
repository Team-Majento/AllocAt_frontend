import {Component, Input, ViewChild} from '@angular/core';
import {UserRequest} from "../../../models/userRequest";
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../../utility/form-control-util";
import {UserService} from "../../service/user.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends FormControlUtil{

  @Input()
  formTitle = "form";

  @Input()
  user = {} as UserRequest;

  @ViewChild('InputForm')
  inputForm!: NgForm;

  form: any;
  img: any;
  formData: FormData = new FormData();

  @Input()
  url = "assets/img/upload-img.png"
  flag: boolean = false;

  constructor(private service: UserService, private location: Location) {
    super();
    this.user.imageURL=this.url;
  }

  // todo
  // passwordPtn ='^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"

  addUser() {
    console.log(this.user)
    if (this.isFormValid(this.inputForm)) {
      console.log("*")
      this.service.addUser(this.user).subscribe(
        (compileResults) => {
          console.log("#")
          console.log(compileResults);
        }
        , error => {
          console.log(error)
        });
    }
  }

  onSelectFile(e: Event) {
    // @ts-ignore
    if (e.target.files && e.target.files.length > 0) {
      // @ts-ignore
      const file: File = e.target.files[0];

      this.formData.append('file', file);
      this.flag = true;

      var reader = new FileReader();
      // @ts-ignore
      reader.readAsDataURL(e.target.files[0]);
      // @ts-ignore
      console.log(e.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }


  goBack() {
    this.location.back();
  }
}
