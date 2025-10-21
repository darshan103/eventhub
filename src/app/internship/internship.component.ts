import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent {
  internships = [
    {
      title: 'Frontend Developer Internship',
      description: 'Work with our team to build responsive web applications using Angular and Tailwind CSS.',
      image: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/startup-593327_1280.jpg',
      company: 'TechNova Labs',
      location: 'Remote',
      duration: '3 Months',
      stipend: '$500 / month'
    },
    {
      title: 'Data Science Intern',
      description: 'Analyze data and build predictive models for real-world applications in renewable energy.',
      image: 'https://cdn.pixabay.com/photo/2017/01/10/19/05/data-1966556_1280.jpg',
      company: 'GreenAI Solutions',
      location: 'Bangalore, India',
      duration: '6 Months',
      stipend: '$800 / month'
    },
    {
      title: 'Backend Developer Internship',
      description: 'Help develop and maintain APIs using Node.js, Strapi, and PostgreSQL for scalable web apps.',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/computer-1869306_1280.jpg',
      company: 'CloudCore Systems',
      location: 'Pune, India',
      duration: '4 Months',
      stipend: '$700 / month'
    }
  ];
}
