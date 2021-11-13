import { EmailService } from './email.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private emailService: EmailService,
    private _snackBar: MatSnackBar
  ) {}

  showSend: boolean = true;

  ngOnInit(): void {
    if (this.scroller.getScrollPosition()[1] > 0) {
      this.scroller.scrollToAnchor('about');
    }

    AOS.init();

    this.emailForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', Validators.minLength(3)),
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
    this.showSend = false;
    this.emailService.sendEmail(this.emailForm.value).subscribe(
      (res) => {
        this.openSnacBarSuccess();
        this.showSend = true;
        this.removeValues();
      },
      (error) => {
        this.openSnacBarFail();
        console.log(error);
        this.showSend = true;
      }
    );
  }

  openSnacBarSuccess() {
    this._snackBar.open(
      'Email Sent Successfully by',
      `${this.emailForm.value.name}`,
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }
  openSnacBarFail() {
    this._snackBar.open('Some Error Occured', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  removeValues() {
    this.emailForm.reset();
  }

  get name() {
    return this.emailForm.get('name');
  }
  get email() {
    return this.emailForm.get('email');
  }
  get subject() {
    return this.emailForm.get('subject');
  }
  get message() {
    return this.emailForm.get('message');
  }
}
