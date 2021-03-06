import { EmailService } from './email.service';
import { ViewportScroller } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { statsModel } from '../../models/stats';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  emailForm: FormGroup;
  showSend: boolean = true;
  isloading: boolean = false;
  hits: number = 0;
  totalEmails: number = 0;

  constructor(
    private scroller: ViewportScroller,
    private emailService: EmailService,
    private _snackBar: MatSnackBar,
    public EmailStats: statsModel,
    private cd: ChangeDetectorRef,
    private updates: SwUpdate
  ) {}

  totalEmailvalue: number = 0;
  totalEmailsSent: number = 0;

  ngOnInit(): void {
    if (this.scroller.getScrollPosition()[1] > 0) {
      this.scroller.scrollToAnchor('about');
    }

    AOS.init();

    this.emailForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    this.getStatsApi();

    this.updates.available.subscribe((event) => {
      alert('New Update available, Please Reload the page');
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
    this.isloading = true;
    this.emailService.sendEmail(this.emailForm.value).subscribe(
      (res) => {
        this.openSnacBarSuccess();
        this.showSend = true;
        this.removeValues();
        this.isloading = false;
        this.getStatsApi();
      },
      (error) => {
        this.openSnacBarFail();
        this.showSend = true;
        this.isloading = false;
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

  getStatsApi() {
    this.emailService.getStats().subscribe((stats) => {
      let a = JSON.stringify(stats);
      this.EmailStats = JSON.parse(a);
      this.hits = this.EmailStats.hits;
      this.totalEmails = this.EmailStats.totalEmails;
      this.totalEmailvalue =
        (this.EmailStats.totalEmails / this.EmailStats.hits) * 100;
      this.totalEmailsSent =
        (this.EmailStats.hits / (this.EmailStats.totalEmails * 10)) * 100;
      this.cd.markForCheck();
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
