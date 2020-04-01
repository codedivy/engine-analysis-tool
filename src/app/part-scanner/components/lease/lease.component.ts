import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeaseService} from "../../services/lease.service";

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.scss']
})
export class LeaseComponent implements OnInit {

  public leaseDetails: object;

  constructor(private activeRoute: ActivatedRoute, private leaseService: LeaseService) { }

  ngOnInit() {
    this.getLeaseDetails();
  }

  getLeaseDetails() {
    this.activeRoute.params.subscribe(params => {
      if(params['leaseId']) {
        console.log("Making a server call and fetching the lease details");

        this.leaseService.loadLeaseDdetails().subscribe(leaseDetails => this.leaseDetails = leaseDetails);
      }
    })

  }

}
