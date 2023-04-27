import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, numberAttribute} from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `
    <iconify-icon
      [icon]="name"
      mode="svg"
      [height]="size"
      [color]="color"
      [width]="size"
      noobserver>
    </iconify-icon>`,
  styles: ``
})
export class IconComponent {
  @Input({required: true}) name!: string
  @Input() color?: string
  @Input({transform: numberAttribute}) size: number = 24
}
