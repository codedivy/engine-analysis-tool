import {Component, OnInit, OnChanges, ViewChild, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {WebcamImage} from 'ngx-webcam';
import {CameraComponent} from '../camera/camera.component';
import { FormGroup } from '@angular/forms';

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
  uploadImageForm: FormGroup;
  selected = 'option2';

  showCameraView: boolean;
  fullScreenView: boolean;

  async handleImage(webcamImage: WebcamImage) {
    this.convertSrcToBlob(webcamImage.imageAsDataUrl)
    .then(blob => {
      const blobImage = blob;
      console.log('blob', blobImage)
      this.webcamImage = ({blob: blobImage, original: webcamImage});
    });
  }

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.showCameraView = false;
    this.outlineImageList = [
      {image: 'Engine outline 1', src: '../../assets/images/engines-outlines/utc-engine-outline.png'},
      {image: 'Some Other', src: 'https://via.placeholder.com/300.png/09f/fff'}
    ];
  }

  private convertSrcToBlob(url) {
    return fetch(url).then(res => res.blob());
  }

  onSubmit() {
    if (true ) {
        const formData = new FormData();
        console.log('webcam', this.webcamImage);
        if (this.webcamImage) {
          // formData.append('file', this.webcamImage.blob);
        }

        // to see the structure of the formdata
        formData.forEach((value, key) => {
            console.log(key, ': ', value);
        });

        // this.apiService.register(formData)
        // .subscribe(
        //     response => {
        //         this.successToaster(response.msg);
        //         this.activeModal.close();
        //         console.log(response);
        //     }
        // );
    }
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
