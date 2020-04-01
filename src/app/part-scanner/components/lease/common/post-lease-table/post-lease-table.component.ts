import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-post-lease-table',
  templateUrl: './post-lease-table.component.html',
  styleUrls: ['./post-lease-table.component.scss']
})
export class PostLeaseTableComponent implements OnInit {

  @Input() data: any = [];
  @Input() tableHeading;

  @ViewChild(MatSort, {static: false}) set matSort(sort: MatSort) {
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator, {static: false}) set paginator(sort: MatPaginator) {
    this.dataSource.paginator = sort;
  }

  public cssClassForStatus = {
    P: 'pending',
    M: 'missing',
    D: 'done'
  };

  public displayedColumns: string[] = ['position', 'partName', 'gridLocation', 'totalCount', 'serialNumber', 'photo', 'preLeaseStatus', 'postLeaseStatus'];
  public dataSource: any;

  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.dataSource.data = this.data;
  }

}
