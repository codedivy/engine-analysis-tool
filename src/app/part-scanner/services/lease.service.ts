import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Observer} from "rxjs";
import {RestClient} from "../common/rest.client";

@Injectable({
  providedIn: 'root'
})
export class LeaseService {

  private selectedLeaseSource = new BehaviorSubject(null);
  public currentLease$ = this.selectedLeaseSource.asObservable();

  constructor( private http: RestClient ) {
  }

  changeLease(leaseData: object) {
    this.selectedLeaseSource.next(leaseData);
  }


  public loadLeaseDdetails(): Observable<any> {
    console.log("Inside service")
    return Observable.create((observer: Observer<any>) => {
      const response = {
        leaseId: 1,
        isPre: true,
        basicDetails: {
          engineName: "V2500",
          leasee: "Indigo",
          startDate: "12 Jan 2020",
          endDate: "15 Apr 2020",
          serialNumber: "AE-1223214"
        },
        sectionDetails: []
      };
      this.changeLease(response);
      observer.next(response);
      observer.complete();
      // this.http.get(config.LIST_OF_SOURCES_URL, {}).subscribe(response => {
      //   this.storeCameraSource(response);
      //   observer.next(response);
      //   observer.complete();
      // });
    });
  }
}
