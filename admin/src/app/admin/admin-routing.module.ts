import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
                        { path: 'admission', loadChildren: './admission/admission.module#AdmissionModule' },
                        { path: 'fee-management', loadChildren: './fee-management/fee.management#FeeManagementModule' },
                        { path: 'employee-manager', loadChildren: './employee-manager/employee-manager.module#EmployeeManagerModule' },
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }