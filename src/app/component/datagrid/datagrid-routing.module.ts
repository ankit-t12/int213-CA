import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatagridComponent } from './datagrid.component';

const routes: Routes = [
  {
        path: "datagrid",
        component: DatagridComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatagridRoutingModule { }
