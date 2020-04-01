import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pre-lease',
  templateUrl: './pre-lease.component.html',
  styleUrls: ['./pre-lease.component.scss']
})
export class PreLeaseComponent implements OnInit {

  @Input() leaseDetails = {};

  constructor() { }

  ngOnInit() {

  }

}
