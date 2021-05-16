import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private resourceUrl;
  private resource = '/email';

  constructor(private http: HttpClient) {
    this.resourceUrl = `${environment.apiUrl}${environment.apiPrefix}${this.resource}`;
  }

  public sendEmail(email: Email): Observable<ApiResponse> {
    const url = `${this.resourceUrl}/send-email`;

    return this.http.post<ApiResponse>(url, email);
  }


}
