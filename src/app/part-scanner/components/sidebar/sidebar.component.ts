import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewLeaseComponent } from '../../components/new-lease/new-lease.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    modalReference = null;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        public router: Router,
        private modalService: NgbModal,
                ) {
    }

    ngOnInit() {
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.toggleCollapsed();

    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    openVerticallyCentered() {
        this.modalReference = this.modalService.open(NewLeaseComponent, { centered: true });
        this.modalReference.result.then((data) => {
            // this.resetModalData();
        }, (reason) => {
            // this.resetModalData();
        });
    }
}
