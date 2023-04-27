import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {NgbPopover, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {SkillsComponent} from "./components/skills/skills.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ProjectsComponent} from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    NgbPopover,
    NgbTooltip,
    SkillsComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
