import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  user: User;
  constructor(
    public viewCtrl: ViewController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userClass: UserService,
    private toast: ToastService ) {
    
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  updateUser(user: User){
    this.userClass.editUser(user).then(() => {
      this.toast.show(`${user.firstname} has been updated`)
      this.viewCtrl.dismiss();
    });
  }
}
