import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../../models/user/user.model";

@Injectable()
export class UserService {

    private userRef = this.dbase.list<User>('users');

    constructor(private dbase: AngularFireDatabase){

    }

    getUser(){
        return this.userRef;
    }

    addUser(user: User){
        return this.userRef.push(user);
    }

    editUser(user: User){
        return this.userRef.update(user.key, user);
    }

    deleteUser(user: User){
        return this.userRef.remove(user.key);
    }

    deleteAllUsers(){
        return this.userRef.remove();
    }
}