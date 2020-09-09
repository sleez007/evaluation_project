import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditingComponent } from './editing.component';
const routes: Routes = [
  {
    path:"",
    component: EditingComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EditRoutesModule{}