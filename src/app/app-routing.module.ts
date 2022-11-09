import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },


  {
    path: '',
    loadChildren: () => import('./component/datagrid/datagrid.module').then(m => m.DatagridModule),
   
  },


  {
    path: 'registration',
  component:RegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


