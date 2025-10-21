import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventhubService } from '../eventservices/eventhub.service';

@Component({
  selector: 'app-eventhub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventhub.component.html',
  styleUrl: './eventhub.component.css'
})
export class EventhubComponent {
  // events = [
  //   {
  //     title: 'Google Cloud Hackathon 2025',
  //     desc: 'Build innovative cloud apps and win exciting prizes.',
  //     date: 'Oct 25–27, 2025',
  //     image: 'https://source.unsplash.com/800x400/?hackathon,tech',
  //   },
  //   {
  //     title: 'Microsoft Future Developer Challenge',
  //     desc: 'Show your skills with AI and web technologies.',
  //     date: 'Nov 10–15, 2025',
  //     image: 'https://source.unsplash.com/800x400/?coding,developer',
  //   },
  //   {
  //     title: 'GitHub CodeFest 2025',
  //     desc: 'Collaborate, code, and contribute to open-source projects.',
  //     date: 'Dec 1–3, 2025',
  //     image: 'https://source.unsplash.com/800x400/?programming,event',
  //   },
  // ];

  events: any[] = [];

  backendHackathons: any[] = [];
  backendContests: any[] = [];
  backendInternships: any[] = [];

  currentIndex = 0;
  currentYear = new Date().getFullYear();

  constructor(private eventService: EventhubService) {
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

}
