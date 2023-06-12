import {Component, Inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  confirmAction(): boolean {
    // Handle the confirm button click event
    // Perform necessary logic here
    console.log('Action confirmed');
    this.dialogRef.close();
    return true;
  }

  cancelAction(): boolean {
    // Handle the cancel button click event
    // Perform necessary logic here
    console.log('Action cancelled');
    this.dialogRef.close();
    return false;
  }

}
