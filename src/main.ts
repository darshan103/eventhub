import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { EventhubComponent } from './app/eventhub/eventhub.component';
import { HackathonComponent } from './app/hackathon/hackathon.component';
import { CodingcontestComponent } from './app/codingcontest/codingcontest.component';
import { InternshipComponent } from './app/internship/internship.component';

const routes = [
  { path: '', component: EventhubComponent },
  { path: 'events/hackathons', component: HackathonComponent },
  { path: 'events/codingcontests', component: CodingcontestComponent },
  { path: 'events/internships', component: InternshipComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
