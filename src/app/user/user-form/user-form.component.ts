import {Component, Input, ViewChild} from '@angular/core';
import {UserRequest} from "../../../models/userRequest";
import {NgForm} from "@angular/forms";
import {FormControlUtil} from "../../../utility/form-control-util";
import {UserService} from "../../service/user.service";
import { Location } from '@angular/common';
import {DisplayMessageService} from "../../service/display-message.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends FormControlUtil{

  hidePassword: boolean=true;

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
  isUpdateForm : boolean | undefined;

  @Input()
  url = "assets/img/upload-img.png"
  flag: boolean = false;

  constructor(private service: UserService, private location: Location,private messageService:DisplayMessageService) {
    super();
    this.user.imageURL=this.url;
  }

  togglePasswordVisibility(){
    this.hidePassword =!this.hidePassword;
  }

  // todo
  // passwordPtn ='^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
  IdPattern = "^[1-9][0-9]*$"
  namePattern= "[a-zA-Z.]+$"

  addUser() {
    if (this.isFormValid(this.inputForm)) {
      let url_image:string="";
      this.service.uploadImg(this.formData).subscribe(
        (response: any) => {

          // Handle the server response here
          console.log('File uploaded successfully!');
          // console.log(response)
          console.log(response.publicURL)
          url_image=response.publicURL;

          this.user.imageURL=url_image;
          //console.log(this.resource)

          this.service.addUser(this.user).subscribe(
            (compileResults) => {
              console.log(compileResults);
              this.messageService.showSucessMessage("user Added-Successfully");
              location.reload();
            }
            , error => {
              console.log(error)
              this.messageService.showErrorMessage("error occurred");
            });
        },
        (error: any) => {
          // Handle any errors that occurred during the upload
          console.error('Error uploading file:', error);
          this.messageService.showErrorMessage("error occurred--Error uploading file");
        }
      );
    }
  }

  updateUser() {
    if (this.isFormValid(this.inputForm)) {
      if(this.flag){
        let url_image:string="";
        this.service.uploadImg(this.formData).subscribe(
          (response: any) => {
            // Handle the server response here
            console.log('File uploaded successfully!');
            // console.log(response)
            console.log(response.publicURL)
            url_image=response.publicURL;


            this.user.imageURL=url_image;
            //console.log(this.resource)


            this.service.updateUser(this.user).subscribe(
              (compileResults) => {
                console.log(compileResults);
                this.messageService.showSucessMessage("user updated-Successfully");
              }
              , error => {
                console.log(error)
                this.messageService.showErrorMessage("error occurred");
              });
          },
          (error: any) => {
            // Handle any errors that occurred during the upload
            console.error('Error uploading file:', error);
            this.messageService.showErrorMessage("error occurred--Error uploading file");
          }
        );
      }
      else{

        this.service.updateUser(this.user).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("user updated-Successfully");
          }
          , error => {
            console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });
      }

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
