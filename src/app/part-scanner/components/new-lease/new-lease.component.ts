import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-lease',
  templateUrl: './new-lease.component.html',
  styleUrls: ['./new-lease.component.scss']
})
export class NewLeaseComponent implements OnInit {

  newLeaseDetails: any = {};
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('new lease details', this.newLeaseDetails);
  }

  getCurrentTimeStampOfGivenDate() {
    const updatedDate =  new Date().getTime('Wed Mar 11 2020 16:48:43 GMT+0530 (India Standard Time)');
    console.log(updatedDate);
  }

}
