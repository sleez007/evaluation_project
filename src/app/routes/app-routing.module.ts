import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

//MY imports
//Route Setup 
//Note: I could have used  the normal routing, but i felt you will prefer i use lazy loading
const routes: Routes = [
  {
    path:"",
    component :  HomeComponent
  },
  {
    path:"grid1",
    loadChildren:()=>import("../feature-modules/paging/paging.module").then(mod=>mod.PagingModule)
  },
  {
    path:"grid2",
    loadChildren:()=>import("../feature-modules/sorting/sorting.module").then(mod=>mod.SortingModule)
  },
  {
    path:"grid3",
    loadChildren:()=>import("../feature-modules/filtering/filtering.module").then(mod=>mod.FilteringModule)
  },
  {
    path:"grid4",
    loadChildren:()=>import("../feature-modules/editing/editing.module").then(mod=>mod.EditingModule)
  },
  {path: '**', redirectTo: '/'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
