import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { Email } from '../models/email';
import { ApiResponse } from '../models/api-response';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  emailAddressControl = new FormControl('', [Validators.required, Validators.email]);
  messageAreaControl = new FormControl('', [Validators.required]);
  isLoading = false;

  emailForm: Email;

  constructor(private emailSvc: EmailService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  onClickEmail() {
    if (this.nameControl.valid && this.emailAddressControl.valid && this.messageAreaControl.valid) {
      this.sendMessage();
    } else {
      this.nameControl.markAsTouched();
      this.emailAddressControl.markAllAsTouched();
      this.messageAreaControl.markAllAsTouched();
    }
  }

  sendMessage(): void {
    this.emailForm = {
      senderName: this.nameControl.value,
      senderAddress: this.emailAddressControl.value,
      senderMessage: this.messageAreaControl.value
    };

    this.isLoading = true;
    this.emailSvc.sendEmail(this.emailForm).subscribe((result: ApiResponse) => {
      if (result && result.success === true) {
        this.openSnackBar('Message sent successfully.');
        this.isLoading = false;
      } else {
        this.handleError();
      }
    }, error => {
      this.handleError();
    });
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'OK', { duration: 3500 } );
  }

  private handleError(): void {
    this.openSnackBar('Message failed to send.');
    this.isLoading = false;
  }

}
