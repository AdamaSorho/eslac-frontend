import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendMessage(message: ContactMessage): Observable<any> {
    // Replace with your actual API endpoint
    return this.http.post('/api/contact', message);
  }
}
