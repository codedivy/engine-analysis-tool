import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {WebcamImage} from 'ngx-webcam';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {CameraComponent} from "../../camera/camera.component";
import {LeaseService} from "../../../services/lease.service";

@Component({
  selector: 'app-scan-part',
  templateUrl: './scan-part.component.html',
  styleUrls: ['./scan-part.component.scss']
})
export class ScanPartComponent implements OnInit {

  @ViewChild('camera', {static: false}) camera: CameraComponent;

  public selectedOutlineImage;
  public outlineImageList;
  public webcamImage;
  public savedSections: any = [];
  public selectedSectionPartList: any = [];
  public leaseDetails: object = {
    leaseId: null,
    basicDetails: {},
    isPre: null
  };

  showCameraView: boolean;
  fullScreenView: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private apiService: ApiService,
    private leaseService: LeaseService,
    public router: Router) {
    console.log(this.leaseDetails);
  }

  ngOnInit() {
    this.showCameraView = false;
    this.outlineImageList = [
      {id: 1,  image: 'Engine outline 1', src: '../../assets/images/engines-outlines/utc-engine-outline.png'},
      {id: 2,  image: 'Some Other', src: 'https://via.placeholder.com/300.png/09f/fff'}
    ];

    this.leaseService.currentLease$.subscribe(lease => this.leaseDetails = lease);
    // setTimeout(() => this.)

  }

  async handleImage(webcamImage: WebcamImage) {
    this.convertSrcToBlob(webcamImage.imageAsDataUrl)
      .then(blob => {
        const blobImage = blob;
        console.log('blob', blobImage);
        this.webcamImage = ({blob: blobImage, original: webcamImage});
      });
  }

  private convertSrcToBlob(url) {
    return fetch(url).then(res => res.blob());
  }

  onUpload() {
    const formData = new FormData();
    console.log('webcam', this.webcamImage);
    if (this.webcamImage) {
      formData.append('file', this.webcamImage.blob);
    }

    formData.forEach((value, key) => console.log(key, ': ', value));

    // this.apiService.uploadImage(formData)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       if ( response.success ) {
    //         if ( this.savedSections.indexOf(this.selectedOutlineImage.id) === -1 ) {
    //           this.savedSections.push(this.selectedOutlineImage.id);
    //           this.generatePartList();
    //         }
    //         console.log('saved section', this.savedSections)
    //       }
    //     }
    //   );
    this.savedSections.push(this.selectedOutlineImage.id);
    this.generatePartList();
  }

  generatePartList() {
    console.log('generate partlist')
    const dummyData = [
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'M'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'P', Detectedstatus: 'P'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'M', Detectedstatus: 'M'},
      {position: 1, partName: 'ABC', gridLocation: '3*2', totalCount: '2', serialNumber: 'ABC123', photo: 'https://www.asdreports.com/media/PR_5389.jpg', expectedStatus: 'D', Detectedstatus: 'P'},
      ];
    this.selectedSectionPartList = dummyData;
    // this.showPartListTable = true;

  }
  generateFinalReport(leaseId) {
    this.router.navigateByUrl('lease-list/' + leaseId);
  }

  resetCapturedImage() {
    this.webcamImage = null;

    console.log('reset', this.selectedOutlineImage )
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
