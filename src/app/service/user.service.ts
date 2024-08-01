// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null);
  currentUser = this.userSource.asObservable();

  users: User[] = [
    { name: 'Hugo', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
    { name: 'Aurore', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' }
  ];

  constructor() {
    this.changeUser(this.users[0]); // Set default user to Hugo
  }

  changeUser(user: User) {
    this.userSource.next(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}
