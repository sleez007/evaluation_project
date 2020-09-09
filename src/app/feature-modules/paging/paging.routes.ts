import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagingComponent } from './paging.component';
const routes: Routes = [
  {
    path:"",
    component: PagingComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagingRoutesModule{}