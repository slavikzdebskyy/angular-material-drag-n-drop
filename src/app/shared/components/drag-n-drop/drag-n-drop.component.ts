import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, Point} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent {

  public ivents: string[];

  constructor() {
    this.ivents = [
      'Section',
      'Instructions',
      'Criteria',
      'Questions',
    ];
  }



  // public dropped(event): void {
  //
  // }

  public dropped(event: CdkDragDrop<string[]>): void {
    console.log('dropped => ', event);

  }
public drop(event): void {
    console.log('drop => ', event);
    moveItemInArray(
    this.ivents,
    event.previousIndex,
    event.previousIndex
  );
  }

  public position(a, b): Point {
    return {x: 0, y: 0};
  }

}
