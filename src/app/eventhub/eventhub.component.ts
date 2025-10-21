import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventhubService } from '../eventservices/eventhub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventhub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventhub.component.html',
  styleUrl: './eventhub.component.css'
})
export class EventhubComponent {

  events: any[] = [];

  backendHackathons: any[] = [];
  backendContests: any[] = [];
  backendInternships: any[] = [];

  currentIndex = 0;
  currentYear = new Date().getFullYear();

  constructor(private eventService: EventhubService, private router: Router) {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.events.length;
    }, 4000);
  }

  ngOnInit(): void {
    this.eventService.getHackatons().subscribe(res => {
      this.backendHackathons = res.data;
      this.events = this.backendHackathons;
      console.log("my hackathons are...", this.backendHackathons);
    });

    this.eventService.getContests().subscribe(res => {
      this.backendContests = res.data;
      this.events = this.backendContests;
      console.log("my contests are...", this.backendContests);
    });

    this.eventService.getInternships().subscribe(res => {
      this.backendInternships = res.data;
      // this.events = this.backendInternships;
      // console.log("my internships are...", this.backendInternships);
    });

    setTimeout(() => {
      console.log("my events are...", this.events);
    }, 5000);
  }

  onImageError(event: any) {
    event.target.src = '';
  }

  goToEvent(event: any) {
    window.open(event.url, '_blank');
  }

}
