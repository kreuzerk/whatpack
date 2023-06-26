import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SampleComponent} from "@rspack/rspack-sample-lib";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SampleComponent],
  selector: 'rspack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rspack-sample-app';
}
