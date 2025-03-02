import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {MainBarComponent} from './components/main-bar/main-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, MainBarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebPageResumeAngular';
}
