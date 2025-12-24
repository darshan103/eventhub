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

  constructor(private eventService: EventhubService, private router: Router) {}

  transformDate(dateString: string): string {
    if (!dateString) return 'Date not specified';

    // ✅ CASE 1: ISO date (e.g. 2026-01-03T14:30:00.000Z)
    if (!isNaN(Date.parse(dateString))) {
      const date = new Date(dateString);
      return date.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      });
    }

    // ✅ CASE 2: Hackathon date range (e.g. "Oct 22 - Dec 31, 2025")
    const rangeMatch = dateString.match(
      /([A-Za-z]{3})\s(\d{1,2})\s-\s([A-Za-z]{3})\s(\d{1,2}),\s(\d{4})/
    );

    if (rangeMatch) {
      const [, sm, sd, em, ed, year] = rangeMatch;
      return `${sd} ${sm} ${year} – ${ed} ${em} ${year}`;
    }

    // ✅ Fallback: show as-is
    return dateString;
  }


  ngOnInit(): void {
    this.eventService.getHackatons().subscribe(res => {
      this.backendHackathons = res.data;
      this.events = this.backendHackathons;
      console.log("my hackathons are...", this.backendHackathons);
      this.startAutoSlide();
    });

    this.eventService.getContests().subscribe(res => {
      this.backendContests = res.data;
      this.events = this.backendContests;
      console.log("my contests are...", this.backendContests);
    });

    this.eventService.getInternships().subscribe(res => {
      this.backendInternships = res.data;
      // this.events = this.backendInternships;
    });
  }

  feedbacks = [
    {
      name: 'Pawan Kumar Ranjan',
      role: 'Frontend Developer, India',
      message: 'This platform transformed how I prepare for hackathons, coding contests.',
      image: '../../assests/img01.jpeg'
    }
  ];

  currentFeedbackIndex = 0;
  intervalId: any;

  startAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (!this.events || this.events.length <= 1) return;

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.events.length;
    }, 4000);
  }

  nextFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex + 1) % this.feedbacks.length;
  }

  prevFeedback() {
    this.currentFeedbackIndex =
      (this.currentFeedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  onImageError(event: any) {
    event.target.src = '';
  }

  goToEvent(event: any) {
    window.open(event.url, '_blank');
  }

}
