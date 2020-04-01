import {Component, OnInit, OnChanges, ViewChild, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {WebcamImage} from 'ngx-webcam';
import {CameraComponent} from '../camera/camera.component';
import {ApiService} from '../../services/api.service';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-scan-part',
  templateUrl: './scan-part.component.html',
  styleUrls: ['./scan-part.component.scss']
})
export class ScanPartComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['position', 'partName', 'gridLocation', 'totalCount', 'serialNumber', 'photo', 'expectedStatus', 'Detectedstatus'];
  dataSource: any;

  @ViewChild('camera', {static: false}) camera: CameraComponent;

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

  cssClassForStatus = {
    P: 'pending',
    M: 'missing',
    D: 'done'
  };

  public selectedOutlineImage;
  public outlineImageList;
  public webcamImage;
  public showPartListTable;
  public savedSections: any = [];
  selected = 'option2';

  showCameraView: boolean;
  fullScreenView: boolean;

  async handleImage(webcamImage: WebcamImage) {
    this.convertSrcToBlob(webcamImage.imageAsDataUrl)
    .then(blob => {
      const blobImage = blob;
      console.log('blob', blobImage);
      this.webcamImage = ({blob: blobImage, original: webcamImage});
    });
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private apiService: ApiService,
    public router: Router) {
  }

  ngOnInit() {
    this.showCameraView = false;
    this.showPartListTable = false;
    this.outlineImageList = [
      {id: 1,  image: 'Engine outline 1', src: '../../assets/images/engines-outlines/utc-engine-outline.png'},
      {id: 2,  image: 'Some Other', src: 'https://via.placeholder.com/300.png/09f/fff'}
    ];
    this.dataSource = new MatTableDataSource([]);
  }

  private convertSrcToBlob(url) {
    return fetch(url).then(res => res.blob());
  }

  onUpload() {
    if (true ) {
        const formData = new FormData();
        console.log('webcam', this.webcamImage);
        if (this.webcamImage) {
          formData.append('file', this.webcamImage.blob);
        }

        // to see the structure of the formdata
        formData.forEach((value, key) => {
            console.log(key, ': ', value);
        });

        this.apiService.uploadImage(formData)
        .subscribe(
            response => {
                console.log(response);
                if ( response.success ) {
                  if ( this.savedSections.indexOf(this.selectedOutlineImage.id) === -1 ) {
                    this.savedSections.push(this.selectedOutlineImage.id);  
                  }
                  console.log('saved section', this.savedSections)
                }
            }
        );
    }
  }

  generatePartList() {
    console.log('generate partlist')
    const dummyData = [
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'M'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'P'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'M', Detectedstatus: 'M'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'P'},
      ];

    this.dataSource = new MatTableDataSource(dummyData);
    // this.showPartListTable = true;

  }
  generateFinalReport() {
    this.router.navigateByUrl('/part-list');
  }

  resetCapturedImage() {
    this.webcamImage = null;
    this.dataSource = new MatTableDataSource([]);

    console.log('reset', this.selectedOutlineImage )
  }

  onClick() {
    console.log('webcam', this.webcamImage);
  }

  toggleCamera() {
    this.showCameraView = !this.showCameraView;
  }

  triggerSnapshot() {
    this.camera.triggerSnapshot();
  }

  toggleFullScreen() {
    if ((this.document.fullScreenElement && this.document.fullScreenElement !== null) ||
      (!this.document.mozFullScreen && !this.document.webkitIsFullScreen)) {
      if (this.document.documentElement.requestFullScreen) {
        this.document.documentElement.requestFullScreen();
      } else if (this.document.documentElement.mozRequestFullScreen) {
        this.document.documentElement.mozRequestFullScreen();
      } else if (this.document.documentElement.webkitRequestFullScreen) {
        this.document.documentElement.webkitRequestFullScreen(Element['ALLOW_KEYBOARD_INPUT']);
      }
      this.fullScreenView = true;
    } else {
      if (this.document.cancelFullScreen) {
        this.document.cancelFullScreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitCancelFullScreen) {
        this.document.webkitCancelFullScreen();
      }
      this.fullScreenView = false;
    }
  }
}
