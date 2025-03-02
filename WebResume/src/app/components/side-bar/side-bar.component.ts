import { Component } from '@angular/core';
import {ContactInfoComponent} from '../contact-info/contact-info.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [
    ContactInfoComponent,
    NgOptimizedImage
  ],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
