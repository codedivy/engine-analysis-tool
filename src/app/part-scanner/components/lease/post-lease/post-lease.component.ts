import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-lease',
  templateUrl: './post-lease.component.html',
  styleUrls: ['./post-lease.component.scss']
})
export class PostLeaseComponent implements OnInit {

  @Input() leaseDetails = {};

  public allSectionsPartList: any = [];

  constructor() { }

  ngOnInit() {
    this.getAllSectionsPartList();
  }

  public getAllSectionsPartList() {
    this.allSectionsPartList = [
      {
        sectionName: "Section Top Right in Post",
        partList: [
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'M', Detectedstatus: 'M'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'P'},
        ]
      },
      {
        sectionName: "Section bottom",
        partList: [
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'M'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'D'},
          {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'P'},
        ]
      }
    ];
  }

}
