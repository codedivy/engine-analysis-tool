import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.scss']
})
export class LeaseComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getLeaseDetails();
  }

  getLeaseDetails() {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
        console.log("Making a server call and fetching the lease details");
      }
    })

  }

}
