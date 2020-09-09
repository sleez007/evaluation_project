import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGridModule } from 'igniteui-angular';

//All SHARED Module, Components etc ARE DROPPED HERE to avoid boiler plates and circular dependencies


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IgxGridModule
  ],
  exports:[
    IgxGridModule
  ]
})
export class SharedModule { }
