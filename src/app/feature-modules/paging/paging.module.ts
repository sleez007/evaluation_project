import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingRoutesModule } from './paging.routes';
import { PagingComponent } from './paging.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PagingComponent
  ],
  imports: [
    CommonModule,
    PagingRoutesModule,
    SharedModule
  ]
})

export class PagingModule { }
