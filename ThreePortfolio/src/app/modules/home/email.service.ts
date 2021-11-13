import { EmailModel } from './email';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  public sendEmail(email: EmailModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
    let httpOptions = {
      headers: httpHeaders,
    };
    return this.httpClient.post(
      'https://parth-kathuria-nodemailer.herokuapp.com/api/sendEmail',
      JSON.stringify(email),
      httpOptions
    );
  }
}
