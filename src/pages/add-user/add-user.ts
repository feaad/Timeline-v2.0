import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import { UsersPage } from '../users/users'
import { ToastService } from '../../services/toast/toast.service';


/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  user: User = {
    firstname: '',
    lastname: '',
    department: '',
    position: '',
    date_employed: undefined
  };
  constructor(
    public viewCtrl: ViewController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userClass: UserService,
    private toast: ToastService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  addUser(user: User){
    this.userClass.addUser(user).then(ref => {
      this.toast.show(`${user.firstname} has been added to users`)
      this.viewCtrl.dismiss({key:ref.key});
    });
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
}
