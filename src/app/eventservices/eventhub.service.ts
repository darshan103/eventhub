import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventhubService {

  private apiUrl = environment.BASE_API_URL;

  constructor(private http: HttpClient) { }

  /**
   * Fetch a hackathons
   */
  getHackatons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/event/hackathons`);
  }

  /**
   * Fetch a contests
   */
  getContests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/event/contests`);
  }

  /**
   * Fetch a internships
   */
  getInternships(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/event/internships`);
  }
}
