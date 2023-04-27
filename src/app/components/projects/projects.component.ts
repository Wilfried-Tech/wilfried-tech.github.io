import {Component, OnInit, TemplateRef} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, NgTemplateOutlet} from '@angular/common';
import {NgbCarousel, NgbOffcanvas, NgbSlide, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {ProjectsService} from '../../services/projects.service';
import {Observable} from 'rxjs';
import {Project} from '../../helpers';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgbTooltip,
    NgTemplateOutlet,
    NgForOf,
    AsyncPipe,
    NgIf,
    IconComponent,
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects!: Observable<Project[]>;

  constructor(private projectsService: ProjectsService, private offcanvas: NgbOffcanvas) {
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects()
  }

  showProject(projectOffcanvas: TemplateRef<any>) {
    this.offcanvas.open(projectOffcanvas, {
      panelClass: 'h-100', animation: true,
    })
  }
}
