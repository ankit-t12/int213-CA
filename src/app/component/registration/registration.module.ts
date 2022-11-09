import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MainLayoutModule } from 'src/app/shared/main-layout/main-layout.module';
import { ToastrModule , ToastContainerModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainLayoutModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ]
})
export class RegistrationModule { }
