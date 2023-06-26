import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SampleComponent} from "@webpack/sample-lib";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SampleComponent],
  selector: 'webpack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-app';
}
