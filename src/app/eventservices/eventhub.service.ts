import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventhubService {

  private apiUrl = 'http://localhost:1337/api/events';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all events
   */
  getEvents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  /**
   * Fetch a single event by ID
   */
  getEventById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Optional: Search events by platform (e.g., Hackathon, Internship, Challenge)
   */
  // getEventsByPlatform(platform: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?filters[platform][$eq]=${platform}`);
  // }
}
