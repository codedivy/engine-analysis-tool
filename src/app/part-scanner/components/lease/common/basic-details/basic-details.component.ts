import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {

  @Input() basicDetails: object = {};

  constructor() { }

  ngOnInit() {
  }

}
