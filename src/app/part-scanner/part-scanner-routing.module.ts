import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { PartScannerComponent } from './part-scanner.component';
import { ScanPartComponent } from './components/scan-part/scan-part.component';
import { LeaseListComponent } from './components/lease-list/lease-list.component';
import { LeaseComponent } from "./components/lease/lease.component";


const routes: Routes = [
  {
    path: '',
    component: PartScannerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'lease-list' },
      { path: 'lease-list', component: LeaseListComponent},
      { path: 'lease-list/:leaseId', component: LeaseComponent },
      { path: 'lease-list/:leaseId/scan-part', component: ScanPartComponent},
      // { path: 'visitor-management', component: VisitorManagementComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartScannerRoutingModule { }
