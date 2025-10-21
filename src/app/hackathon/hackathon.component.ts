import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hackathon.component.html',
  styleUrl: './hackathon.component.css'
})
export class HackathonComponent {
  hackathons = [
    {
      title: 'AI Innovators Hackathon 2025',
      description: 'Build next-gen AI-powered solutions to solve real-world challenges.',
      image: 'https://cdn.pixabay.com/photo/2017/06/22/19/02/artificial-intelligence-2436318_1280.jpg',
      location: 'Remote',
      date: 'Nov 10 - Dec 5, 2025',
      prize: '$10,000'
    },
    {
      title: 'Code for Climate Challenge',
      description: 'Join hands to create technology for a sustainable planet.',
      image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/environment-3084338_1280.jpg',
      location: 'San Francisco, CA',
      date: 'Dec 1 - Dec 20, 2025',
      prize: '$5,000'
    },
    {
      title: 'NextGen Web Hack 2025',
      description: 'Build futuristic web experiences using Web3 and AI.',
      image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/technology-3084327_1280.jpg',
      location: 'Online',
      date: 'Nov 25 - Dec 15, 2025',
      prize: '$8,000'
    },
    {
      title: 'AI Innovators Hackathon 2025',
      description: 'Build next-gen AI-powered solutions to solve real-world challenges.',
      image: 'https://cdn.pixabay.com/photo/2017/06/22/19/02/artificial-intelligence-2436318_1280.jpg',
      location: 'Remote',
      date: 'Nov 10 - Dec 5, 2025',
      prize: '$10,000'
    },
    {
      title: 'Code for Climate Challenge',
      description: 'Join hands to create technology for a sustainable planet.',
      image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/environment-3084338_1280.jpg',
      location: 'San Francisco, CA',
      date: 'Dec 1 - Dec 20, 2025',
      prize: '$5,000'
    },
    {
      title: 'NextGen Web Hack 2025',
      description: 'Build futuristic web experiences using Web3 and AI.',
      image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/technology-3084327_1280.jpg',
      location: 'Online',
      date: 'Nov 25 - Dec 15, 2025',
      prize: '$8,000'
    }
  ];
}
