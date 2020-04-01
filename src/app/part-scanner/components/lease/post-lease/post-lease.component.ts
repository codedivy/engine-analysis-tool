import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-lease',
  templateUrl: './post-lease.component.html',
  styleUrls: ['./post-lease.component.scss']
})
export class PostLeaseComponent implements OnInit {

  @Input() leaseDetails = {};

  constructor() { }

  ngOnInit() {
  }

}
