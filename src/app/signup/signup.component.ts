import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { ApiService } from '../part-scanner/services/api.service';
import { AuthGuard } from '../shared';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    signUpDetails: any = {};

    constructor(
        public router: Router,
        private apiService: ApiService,
        private auth: AuthGuard,
  ) { }

    ngOnInit() {}

    onSubmit() {
        console.log(this.signUpDetails);

        this.apiService.signUp(this.signUpDetails).subscribe((signUpRes) => {

        if ( signUpRes.success ) {
            console.log(signUpRes);
            this.auth.signUp();
        } else {
            alert('not found signup credential not found');
        }
    });

    }
}
