import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Resource} from "../../../models/resource";
import {ResourceService} from "../../service/resource.service";
import {FormControlUtil} from "../../../utility/form-control-util";
import {CompanyService} from "../../service/company.service";
import {Location} from '@angular/common';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RateCardFormComponent} from "../../rateCard/rate-card-form/rate-card-form.component";
import {HttpClient} from "@angular/common/http";
import {DisplayMessageService} from "../../service/display-message.service";
import {UpdateRateCardComponent} from "../../rateCard/update-rate-card/update-rate-card.component";

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent extends FormControlUtil implements OnInit {
  @Input()
  formTitle = "Form"

  @Input()
  resource = {} as Resource;



  @ViewChild('InputForm')
  inputForm!: NgForm;

  companies!: any[];
  form: any;
  img :any;
  formData: FormData = new FormData();

  @Input()
  url="assets/img/upload-img.png"

  flag:boolean=false;

  constructor(private resourceService: ResourceService, private companyService: CompanyService, private location: Location, private dialogRef: MatDialog,private httpClient: HttpClient,private messageService:DisplayMessageService) {
    super();
    this.resource.imgUrl=this.url;
    this.resource.availability=true;

  }

  IdPattern = "^[1-9][0-9]*$"

  addResource() {
    if (this.isFormValid(this.inputForm)) {
      let url_image:string="";
      this.resourceService.uploadImg(this.formData).subscribe(
        (response: any) => {
          // Handle the server response here
          console.log('File uploaded successfully!');
          // console.log(response)
          console.log(response.publicURL)
          url_image=response.publicURL;


          this.resource.imgUrl=url_image;
          //console.log(this.resource)


          this.resourceService.addResource(this.resource).subscribe(
            (compileResults) => {
              console.log("resource id---->"+compileResults);
              //this.messageService.showSucessMessage("resource Added-Successfully..ResourceId: "+ compileResults);

              //this.dialogRef.open(RateCardFormComponent);
              const dialogConfig: MatDialogConfig = {
                disableClose: true, // Disable closing the dialog by clicking outside
                // Add other dialog configuration options if needed
              };

              const dialogRef = this.dialogRef.open(RateCardFormComponent, dialogConfig);

              // dialogRef.afterClosed().subscribe(result => {
              //   // Handle the dialog close event if needed
              // });
              localStorage.setItem("resourceIdForRateCard",String(compileResults));
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

  ngOnInit(): void {
    this.companyService.getCompanyNames().subscribe(
      companies => {
        this.companies = companies;

        //  this.resource.companyId= this.companies[0].id; // set default selection
      },
      error => console.error(error)
    );
  }


  onCompanySelectionChange(selectedCompany: any): void {
    // Update the selected company object based on the selected company ID
    console.log("Selected company:", selectedCompany);
    this.resource.companyId = selectedCompany;
  }

  goBack() {
    this.location.back();
  }

  openAddRateCardDialog() {
    this.dialogRef.open(RateCardFormComponent);
  }

  onSelectFile(e: Event) {
    // @ts-ignore
    if (e.target.files && e.target.files.length > 0) {
      // @ts-ignore
      const file: File = e.target.files[0];

      this.formData.append('file', file);
      this.flag=true;

      var reader = new FileReader();
      // @ts-ignore
      reader.readAsDataURL(e.target.files[0]);
      // @ts-ignore
      console.log(e.target.files[0])
      reader.onload = (event: any) => {
       this.url = event.target.result;

      };
      //
      // let url7:string=`http://localhost:8082/file`;
      //
      // this.httpClient.post<any>(url7,this.formData).subscribe(
      //   (response: any) => {
      //     // Handle the server response here
      //     console.log('File uploaded successfully!');
      //    // console.log(response)
      //     console.log(response.publicURL)
      //   },
      //   (error: any) => {
      //     // Handle any errors that occurred during the upload
      //     console.error('Error uploading file:', error);
      //   }
      // );

    }
  }

  updateResource() {

    if (this.isFormValid(this.inputForm)) {
      if(this.flag){
        let url_image:string="";
        this.resourceService.uploadImg(this.formData).subscribe(
          (response: any) => {
            // Handle the server response here
            console.log('File uploaded successfully!');
            // console.log(response)
            console.log(response.publicURL)
            url_image=response.publicURL;


            this.resource.imgUrl=url_image;
            //console.log(this.resource)


            this.resourceService.updateResource(this.resource).subscribe(
              (compileResults) => {
                console.log(compileResults);
                localStorage.setItem("rateCard",String(compileResults.rateCardId));

               // this.dialogRef.open(UpdateRateCardComponent);
                //this.dialogRef.open(RateCardFormComponent);
                const dialogConfig: MatDialogConfig = {
                  disableClose: true, // Disable closing the dialog by clicking outside
                  // Add other dialog configuration options if needed
                };

                const dialogRef = this.dialogRef.open(UpdateRateCardComponent, dialogConfig);

                // dialogRef.afterClosed().subscribe(result => {
                //   // Handle the dialog close event if needed
                // });

               // this.messageService.showSucessMessage("resource updated-Successfully");


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

        this.resourceService.updateResource(this.resource).subscribe(
          (compileResults) => {
            console.log(compileResults);
            localStorage.setItem("rateCard",String(compileResults.rateCardId));
           // this.dialogRef.open(UpdateRateCardComponent);
            const dialogConfig: MatDialogConfig = {
              disableClose: true, // Disable closing the dialog by clicking outside
              // Add other dialog configuration options if needed
            };

            const dialogRef = this.dialogRef.open(UpdateRateCardComponent, dialogConfig);

            // dialogRef.afterClosed().subscribe(result => {
            //   // Handle the dialog close event if needed
            // });

            // this.messageService.showSucessMessage("resource updated-Successfully");

          }
          , error => {
            console.log(error)
            this.messageService.showErrorMessage("error occurred");
          });
      }

    }

  }

}

