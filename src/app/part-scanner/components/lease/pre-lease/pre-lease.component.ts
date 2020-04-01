import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LeaseService} from "../../../services/lease.service";

@Component({
  selector: 'app-pre-lease',
  templateUrl: './pre-lease.component.html',
  styleUrls: ['./pre-lease.component.scss']
})
export class PreLeaseComponent implements OnInit {

  @Input() leaseDetails = {};

  public allSectionsPartList = [];

  constructor(private router: Router, private leaseService: LeaseService) {

  }

  ngOnInit() {
    console.log("ng on itit")
    this.getAllSectionsPartList();

  }

  public getAllSectionsPartList() {
    this.allSectionsPartList = [
      {
        sectionName: "Section Top Right",
        partList: [
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'M'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'P'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'M', Detectedstatus: 'M'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'P'},
        ]
      },
      {
        sectionName: "Section bottom",
        partList: [
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'M'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'P'},
        ]
      }
    ];
  }

  startPostLeaseInspection(leaseId) {
    this.leaseService.changeLease({...this.leaseDetails, isPre: false})
    // this.leaseService.currentLease$.subscribe(lease => console.log(lease));

    this.router.navigateByUrl("lease-list/" + leaseId + "/scan-part");
  }

}
