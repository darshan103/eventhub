import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EventhubComponent } from './eventhub/eventhub.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'eventhub';
}
