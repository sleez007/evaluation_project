import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingRoutesModule } from './sorting.routes';
import { SortingComponent } from './sorting.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SortingComponent],
  imports: [
    CommonModule,
    SortingRoutesModule,
    SharedModule
  ]
})
export class SortingModule { }
