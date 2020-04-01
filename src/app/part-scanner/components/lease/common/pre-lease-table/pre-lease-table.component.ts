import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-pre-lease-table',
  templateUrl: './pre-lease-table.component.html',
  styleUrls: ['./pre-lease-table.component.scss']
})
export class PreLeaseTableComponent implements OnInit {

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

  public displayedColumns: string[] = ['position', 'partName', 'gridLocation', 'totalCount', 'serialNumber', 'photo', 'expectedStatus', 'Detectedstatus'];
  public dataSource: any;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
  }

}
