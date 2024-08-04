import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

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
    RippleModule,
    CardModule,
    MenuModule,
    ChartModule,
    TableModule
  ]
})
export class PrimengModule { }
