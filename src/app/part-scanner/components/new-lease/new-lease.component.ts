import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-lease',
  templateUrl: './new-lease.component.html',
  styleUrls: ['./new-lease.component.scss']
})
export class NewLeaseComponent implements OnInit {

  public newLeaseDetails: any = {};

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('new lease details', this.newLeaseDetails);
    this.router.navigateByUrl("/lease-list/1/scan-part");
    this.activeModal.close();
  }

  getCurrentTimeStampOfGivenDate() {
    // const updatedDate =  new Date().getTime('Wed Mar 11 2020 16:48:43 GMT+0530 (India Standard Time)');
    // console.log(updatedDate);
  }

}
