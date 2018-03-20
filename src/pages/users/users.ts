import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AddUserPage } from '../add-user/add-user';
import { EditUserPage } from '../edit-user/edit-user';
import { DeleteUserPage } from '../delete-user/delete-user';
import { HomePage } from '../home/home';

import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user/user.model';
import { ToastService } from '../../services/toast/toast.service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users$: Observable<User[]>;

  constructor(
    private auth: AngularFireAuth,
    public modalCtrl: ModalController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userClass: UserService,
    private toast: ToastService) {
    this.users$ = this.userClass
      .getUser()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  addUser() {
    let addUserModal = this.modalCtrl.create(AddUserPage);
    addUserModal.present();
  }

  editUser(user: User) {
    let editUserModal = this.modalCtrl.create(EditUserPage, {'user': user});
    editUserModal.present();
  }

  deleteUser(user: User) {
    let deleteUserModal = this.modalCtrl.create(DeleteUserPage, {'user': user});
    deleteUserModal.present();
  }

  deleteAllUsers() {
    this.userClass.deleteAllUsers().then(() => {
      this.toast.show(`All Users Have Been Deleted`)
    });
  }

  signOut(): void {
    this.auth.auth.signOut();
    this.navCtrl.push(HomePage);
}
}
