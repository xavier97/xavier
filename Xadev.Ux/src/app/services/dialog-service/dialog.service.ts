import { Injectable, Inject, TemplateRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  public openDialog(template: TemplateRef<any>): void {
    const dialogRef = this.dialog.open(template, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
