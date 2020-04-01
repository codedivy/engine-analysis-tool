import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PartScannerRoutingModule } from './part-scanner-routing.module';
import { PartScannerComponent } from './part-scanner.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { ScanPartComponent } from './components/scan-part/scan-part.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CameraComponent } from './components/camera/camera.component';
import { MaterialModule } from './common/material/material.module';

import { WebcamModule } from 'ngx-webcam';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewLeaseComponent } from './components/new-lease/new-lease.component';
import { LeaseListComponent } from './components/lease-list/lease-list.component';
import { LeaseCardComponent } from './components/lease-list/lease-card/lease-card.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LeaseComponent } from './components/lease/lease.component';
import { PreLeaseComponent } from './components/lease/pre-lease/pre-lease.component';
import { PostLeaseComponent } from './components/lease/post-lease/post-lease.component';



@NgModule({
  declarations: [
    PartScannerComponent,
    PartListComponent,
    ScanPartComponent,
    HeaderComponent,
    SidebarComponent,
    CameraComponent,
    NewLeaseComponent,
    LeaseListComponent,
    LeaseCardComponent,
    LeaseComponent,
    PreLeaseComponent,
    PostLeaseComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PartScannerRoutingModule,
    WebcamModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    NgbActiveModal
  ],
  entryComponents: [NewLeaseComponent]
})
export class PartScannerModule { }
