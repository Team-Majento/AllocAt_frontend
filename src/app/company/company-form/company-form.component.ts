import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from "../../service/company.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {NgForm} from "@angular/forms";
import {SubSink} from "subsink";
import {DisplayMessageService} from "../../service/display-message.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent extends FormControlUtil implements OnInit,OnDestroy {
  @Input()
  formTitle = "Form"
  @Input()
  company = {} as Company
  @ViewChild('InputForm')
  inputForm!: NgForm;
  form: any;
  img: any;
  formData: FormData = new FormData();

  private subSink=new SubSink();
  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
@Input()
  url = "assets/img/upload-img.png"
  flag: boolean = false;
  constructor(private companyService: CompanyService,private messageService:DisplayMessageService,private location: Location) {
    super();
    this.company.imgUrl=this.url;
  }

  ngOnInit(): void {


  }

  addCompany() {
    if (this.isFormValid(this.inputForm)) {
      let url_image:string="";
      this.companyService.uploadImg(this.formData).subscribe(
        (response: any) => {

          // Handle the server response here
          console.log('File uploaded successfully!');
          // console.log(response)
          console.log(response.publicURL)
          url_image=response.publicURL;

          this.company.imgUrl=url_image;
          //console.log(this.resource)

          this.companyService.addCompany(this.company).subscribe(
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
  updateCompany() {
    if (this.isFormValid(this.inputForm)) {
      if(this.flag){
        let url_image:string="";
        this.companyService.uploadImg(this.formData).subscribe(
          (response: any) => {
            // Handle the server response here
            console.log('File uploaded successfully!');
            // console.log(response)
            console.log(response.publicURL)
            url_image=response.publicURL;


            this.company.imgUrl=url_image;
            //console.log(this.resource)


            this.companyService.updateCompany(this.company).subscribe(
              (compileResults) => {
                console.log(compileResults);
                this.messageService.showSucessMessage("resource updated-Successfully");
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

        this.companyService.updateCompany(this.company).subscribe(
          (compileResults) => {
            console.log(compileResults);
            this.messageService.showSucessMessage("resource updated-Successfully");
          }
          , error => {
            console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });
      }

    }

  }




  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}

