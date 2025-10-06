import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { EventhubComponent } from './app/eventhub/eventhub.component';

const routes = [
  { path: '', component: EventhubComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
