import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  userMenuItems!: MenuItem[];
  selectedUser!: User;

  @ViewChild('userMenu') userMenu: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Mon compte',
        icon: 'pi pi-user',
        routerLink: '/',
      },
      {
        label: 'Dépenses',
        icon: 'pi pi-credit-card',
        routerLink: '/depense',
      },
      {
        label: 'Epargne',
        icon: 'pi pi-wallet',
        routerLink: '/epargne',
      },
    ];

    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.selectedUser = user;
      }
    });

    this.userMenuItems = this.userService.getUsers().map(user => ({
      label: user.name,
      icon: 'pi pi-user',
      command: () => this.selectUser(user)
    }));
  }

  selectUser(user: User) {
    this.userService.changeUser(user);
  }

  onAvatarClick(event: Event) {
    this.userMenu.toggle(event);
  }
}
