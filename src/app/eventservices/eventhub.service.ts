import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventhubService {

  private apiUrl = 'http://localhost:1337/api/eventhub';

  constructor(private http: HttpClient) { }

  /**
   * Fetch a hackathons
   */
  getHackatons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/hackathons`);
  }

  /**
   * Fetch a contests
   */
  getContests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contests`);
  }

  /**
   * Fetch a internships
   */
  getInternships(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/internships`);
  }
}
