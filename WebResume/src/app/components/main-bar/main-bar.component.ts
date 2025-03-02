import { Component } from '@angular/core';
import {ContactInfoComponent} from '../contact-info/contact-info.component';

@Component({
  selector: 'app-main-bar',
  imports: [
    ContactInfoComponent
  ],
  standalone: true,
  templateUrl: './main-bar.component.html',
  styleUrl: './main-bar.component.css'
})
export class MainBarComponent {

}
