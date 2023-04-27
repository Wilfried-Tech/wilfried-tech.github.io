import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgOptimizedImage, NgStyle, NgTemplateOutlet} from "@angular/common";
import {SkillsService} from "../../services/skills.service";
import {NgbOffcanvas, NgbProgressbar, NgbProgressbarConfig, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {map, Observable} from "rxjs";
import {Skill, SkillSection} from "../../helpers";
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgbTooltip,
    NgStyle,
    AsyncPipe,
    NgForOf,
    NgTemplateOutlet,
    NgClass,
    NgbProgressbar,
    IconComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skills!: Observable<SkillSection[]>
  private offcanvasService = inject(NgbOffcanvas)

  constructor(private skillsService: SkillsService, progressBarConfig: NgbProgressbarConfig) {
    progressBarConfig.max = 100
    progressBarConfig.type = "primary"
    progressBarConfig.textType = "white"
    progressBarConfig.striped = true
    progressBarConfig.animated = true
  }

  ngOnInit() {
    this.skills = this.skillsService.getSkills().pipe(map(value => value.map(this.sortSection)))
  }

  isPrimary = (skill: Skill) => skill.primary

  sortSection(section: SkillSection) {
    section.items.sort((a, b) => b.strength - a.strength) // sort desc
    return section
  }

  showMoreSkills(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: "bottom",
      animation: true,
      panelClass: "h-100"
    })
  }

}
