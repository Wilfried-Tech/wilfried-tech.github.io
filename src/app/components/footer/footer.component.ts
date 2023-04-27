import {Component, inject, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private modalService = inject(NgbModal)

  showLegalMentions(content: TemplateRef<any>) {
    this.modalService.open(content, {
      animation: true,
      centered: true,
      scrollable: true
    })
  }
}
