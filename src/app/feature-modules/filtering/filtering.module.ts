import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringRoutesModule } from './filter.routes';
import { FilteringComponent } from './filtering.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FilteringComponent
  ],
  imports: [
    CommonModule,
    FilteringRoutesModule,
    SharedModule
  ]
})
export class FilteringModule { }
