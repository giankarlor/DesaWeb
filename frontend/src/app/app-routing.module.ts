import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './core/pages/page-home/page-home.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'client',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
