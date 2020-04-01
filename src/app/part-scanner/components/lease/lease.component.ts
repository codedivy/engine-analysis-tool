import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.scss']
})
export class LeaseComponent implements OnInit {

  public leaseDetails: object;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getLeaseDetails();
  }

  getLeaseDetails() {
    this.activeRoute.params.subscribe(params => {
      if(params['leaseId']) {
        console.log("Making a server call and fetching the lease details");

        this.leaseDetails = {
          leaseId: params['leaseId'],
          isPre: false,
          basicDetails: {
            engineName: "V2500",
            leasee: "Indigo",
            startDate: "12 Jan 2020",
            endDate: "15 Apr 2020",
            serialNumber: "AE-1223214"
          },
          sectionDetails: []
        }
      }
    })

  }

}
