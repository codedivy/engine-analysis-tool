import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lease-list',
  templateUrl: './lease-list.component.html',
  styleUrls: ['./lease-list.component.scss']
})
export class LeaseListComponent implements OnInit {
  public leases;
  constructor() { }

  ngOnInit() {
    this.leases = [
      1,2,3,4
    ]
  }

}
