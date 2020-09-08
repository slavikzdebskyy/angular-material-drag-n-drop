import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropComponent } from './components';
import { DragDropModule } from '@angular/cdk/drag-drop';

const MATERIAL_MODULES = [
  DragDropModule,
];

@NgModule({
  declarations: [ DragNDropComponent ],
  exports: [ DragNDropComponent ],
  imports: [ CommonModule, ...MATERIAL_MODULES ],
})
export class SharedModule { }
