import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    CommonModule,
    SharedModule,
    ...MATERIAL_MODULES,
  ],
  exports: [ LayoutComponent ],
})

export class CoreModule { }
