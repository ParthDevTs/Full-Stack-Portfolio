import { EmailService } from './email.service';
import { EmailModel } from './email';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.style.scss'],
})
export class HomeComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
    private scroller: ViewportScroller,
    private fb: FormBuilder,
    private email: EmailService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.scroller.getScrollPosition()[1] > 0) {
      this.scroller.scrollToAnchor('about');
    }

    AOS.init();

    this.emailForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    });
  }

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }

  onSubmit() {
    this.email.sendEmail(this.emailForm.value).subscribe(
      (res) => {
        this.openSnacBarSuccess();
        this.emailForm.value.name = ' ';
        this.emailForm.value.email = ' ';
        this.emailForm.value.subject = ' ';
        this.emailForm.value.text = ' ';
      },
      (error) => {
        this.openSnacBarFail();
        console.log(error);
      }
    );
  }

  openSnacBarSuccess() {
    this._snackBar.open(
      'Email Sent Successfully by',
      `${this.emailForm.value.name}`,
      {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    );
  }
  openSnacBarFail() {
    this._snackBar.open('Some Error Occured', '', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
