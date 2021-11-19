import { EmailModel } from '../../models/email';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  url = environment.apiUrl;

  public sendEmail(email: EmailModel): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

    //Configuring Headers
    let httpOptions = {
      headers: httpHeaders,
    };
    //Configuring Api Call
    return this.httpClient.post(
      this.url + '/api/sendEmail',
      JSON.stringify(email),
      httpOptions
    );
  }

  public getStats() {
    return this.httpClient.get(this.url + '/api' + '/getEmailStats');
  }
}
