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
  internshalaImg: any;

  currentIndex = 0;
  currentYear = new Date().getFullYear();

  constructor(private eventService: EventhubService, private router: Router) {}

  transformDate(dateString: string): string {
    if (!dateString) return 'Date not specified';

    // CASE 1: ISO date (e.g. 2026-01-03T14:30:00.000Z)
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

    // Fallback: show as-is
    return dateString;
  }

  convertHackathonDateToISO(dateString: string): { startISO: string | null; endISO: string | null; } {
    if (!dateString) return { startISO: null, endISO: null };

    // If already ISO (coding contest)
    const isoTest = new Date(dateString);
    if (!isNaN(isoTest.getTime())) {
      return {
        startISO: isoTest.toISOString(),
        endISO: null,
      };
    }

    // Handle ranges like:
    // "Dec 09, 2025 - Jan 22, 2026"
    // "Oct 22 - Dec 31, 2025"
    const parts = dateString.split('-').map(p => p.trim());
    if (parts.length !== 2) {
      return { startISO: null, endISO: null };
    }

    // Ensure year exists on both sides
    const yearMatch = dateString.match(/\d{4}/g);
    const years = yearMatch ? yearMatch.map(y => Number(y)) : [];

    const startDateStr =
      years.length === 1 ? `${parts[0]} ${years[0]}` : parts[0];
    const endDateStr =
      years.length === 1 ? `${parts[1]} ${years[0]}` : parts[1];

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return { startISO: null, endISO: null };
    }

    return {
      startISO: startDate.toISOString(),
      endISO: new Date(
        endDate.setHours(23, 59, 59, 999)
      ).toISOString(),
    };
  }

  

  ngOnInit(): void {
    this.eventService.getHackatons().subscribe(res => {
      this.backendHackathons = res.data.map((event:any) => {
        const { startISO, endISO } =
          this.convertHackathonDateToISO(event.raw_data.start_date);

        let finalDate = 'Date not specified';

        // Hackathon (range)
        if (startISO && endISO) {
          finalDate =
            `${new Date(startISO).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })} – ${new Date(endISO).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}`;
        }

        return {
          ...event,
          start_date: finalDate,
        };
      });

      this.events = this.backendHackathons;
      console.log("my hackathons are...", this.backendHackathons);
      this.startAutoSlide();
    });

    this.eventService.getContests().subscribe(res => {
      this.backendContests = res.data;
      this.events = this.backendContests;
      console.log("my contests are...", this.backendContests);
      this.startAutoSlide();
    });

    this.eventService.getInternships().subscribe(res => {
      this.backendInternships = res.data;
      this.internshalaImg = '/images/internshalaImg.jpg';
      // this.events = this.backendInternships;
      this.startAutoSlide();
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
