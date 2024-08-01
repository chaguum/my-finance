import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    SidebarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule,
    DropdownModule,
    TieredMenuModule,
  ]
})
export class PrimengModule { }
