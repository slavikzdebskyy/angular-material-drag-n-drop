import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DragNDropComponent {
  public mutatedEvents: string[];

  private originalEvents: string[];
  private currentEvent: string;

  constructor() {
    this.originalEvents = [
      'Section',
      'Instructions',
      'Criteria',
      'Questions',
    ];
    this.mutatedEvents = [...this.originalEvents];
    this.currentEvent = '';
  }

  public get isShowAdditionalItem(): boolean {
    return !Boolean(this.currentEvent);
  }

  public get draggableTxt(): string {
    return this.isShowAdditionalItem
      ? 'Move it to event'
      : `Add <span class="cur-event"> ${this.currentEvent} </span> to your Plan to provide guidance to your Interviewers`;
  }

  public isDragDisabled(index: number): boolean {
    return this.originalEvents[index] !== this.currentEvent;
  }

  public onDrop({ currentIndex }: CdkDragDrop<string[]>): void {
    this.currentEvent = this.originalEvents[currentIndex];
    this.mutatedEvents = this.originalEvents.map(((item: string, index: number) => index === currentIndex ? this.draggableTxt : item));
  }
}
