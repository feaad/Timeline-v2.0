import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the DeleteUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-user',
  templateUrl: 'delete-user.html',
})
export class DeleteUserPage {
  user: User;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,  
    public navParams: NavParams,
    private userClass: UserService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  deleteUser(user: User){
    this.userClass.deleteUser(user).then(() => {
      this.toast.show(`${user.firstname} has been deleted`)
      this.viewCtrl.dismiss();
    });
  }

}
