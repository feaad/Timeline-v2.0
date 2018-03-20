import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import {AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../services/toast/toast.service';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('em') user;
	@ViewChild('pass1') upass;

  constructor(private fire: AngularFireAuth, private toast: ToastService, public loadingCtrl: LoadingController, public navCtrl: NavController) {

  }

  presentLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('DashboardPage');
    }, 100);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  dashboardPage(): void {
  	this.fire.auth.signInWithEmailAndPassword(this.user.value, this.upass.value)
  	.then(data => {
     this.presentLoadingText();
     this.toast.show(`Login successful`);
     this.navCtrl.push('DashboardPage');  
  	});
  }

  	

}
