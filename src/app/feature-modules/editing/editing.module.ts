import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutesModule } from './editing.routes';
import { EditingComponent } from './editing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditingComponent],
  imports: [
    CommonModule,
    EditRoutesModule,
    SharedModule
  ]
})
export class EditingModule { }
