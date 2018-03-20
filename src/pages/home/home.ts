import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../services/toast/toast.service';
import { LoadingController } from 'ionic-angular';
import { SystemUser } from '../../models/system_user/system_user.model';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  system_user = {} as SystemUser;

  constructor(
    private auth: AngularFireAuth, 
    private toast: ToastService, 
    public loadingCtrl: LoadingController, 
    public navCtrl: NavController) {

  }

  presentLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('UsersPage');
    }, 100);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  // dashboardPage(): void {
  //   this.presentLoadingText();
  // 	this.fire.auth.signInWithEmailAndPassword(this.user.value, this.upass.value)
  // 	.then(data => {
  //    this.toast.show(`Login successful`);
  //    this.navCtrl.push('UsersPage');  
  // 	});
  // }

  async signIn(system_user: SystemUser){
    try {
      
      const result = this.auth.auth.signInWithEmailAndPassword(system_user.email, system_user.password);
      if (result){
        this.presentLoadingText();
        // this.navCtrl.push('UsersPage'); 
      }
    } catch(e){
      console.error(e);
    }
  }

}
