import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lease-list',
  templateUrl: './lease-list.component.html',
  styleUrls: ['./lease-list.component.scss']
})
export class LeaseListComponent implements OnInit {
  public leases;

  constructor(private router: Router) { }

  ngOnInit() {
    this.leases = [
      1,2,3,4
    ]
  }

  goToLeaseDetailsPage(leaseId) {
    this.router.navigateByUrl('/lease-list/' + leaseId);
  }

}
