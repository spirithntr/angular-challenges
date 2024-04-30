import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-card',
  template: `
    <ng-content select="img" />

    <section>
      <ng-container *ngFor="let item of list">
        <ng-template
          [ngTemplateOutlet]="rowTemplate"
          [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
      </ng-container>
    </section>

    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItem()">
      Add
    </button>
  `,
  standalone: true,
  host: {
    class: 'flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4',
  },
  imports: [NgIf, NgFor, NgTemplateOutlet],
})
export class CardComponent<T> {
  @Input() list: T[] | null = null;
  @Output() addNew = new EventEmitter<void>();

  CardType = CardType;

  @ContentChild('rowRef', { read: TemplateRef }) rowTemplate!: TemplateRef<{
    $implicit: T;
  }>;

  addNewItem() {
    this.addNew.emit();
  }
}
