import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridRoutingModule } from './datagrid-routing.module';
import { MainLayoutModule } from 'src/app/shared/main-layout/main-layout.module';
import { DatagridComponent } from './datagrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule , ToastContainerModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    DatagridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainLayoutModule,
    DatagridRoutingModule,
    AgGridModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatagridModule { }
