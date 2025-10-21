import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-codingcontest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './codingcontest.component.html',
  styleUrl: './codingcontest.component.css'
})
export class CodingcontestComponent {
  contests = [
    {
      title: 'CodeSprint Global 2025',
      description: 'A worldwide coding marathon where developers solve algorithmic challenges and win amazing prizes.',
      image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/laptop-1954422_1280.jpg',
      platform: 'HackerRank',
      date: 'Nov 12 - Nov 15, 2025',
      prize: '$3,000'
    },
    {
      title: 'LeetCode Winter Challenge',
      description: 'Sharpen your problem-solving skills in this intense 2-week challenge from LeetCode.',
      image: 'https://cdn.pixabay.com/photo/2018/03/01/09/27/laptop-3190194_1280.jpg',
      platform: 'LeetCode',
      date: 'Dec 1 - Dec 14, 2025',
      prize: '$1,500'
    },
    {
      title: 'Codeforces Grand Prix Round 2025',
      description: 'Show your competitive programming skills and climb the Codeforces leaderboard.',
      image: 'https://cdn.pixabay.com/photo/2018/01/16/07/52/code-3085352_1280.jpg',
      platform: 'Codeforces',
      date: 'Dec 5, 2025',
      prize: '$2,000'
    }
  ];
}
