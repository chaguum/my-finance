import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EpargneComponent } from './main-content/epargne/epargne.component';
import { DepenseComponent } from './main-content/depense/depense.component';
import { NgModule } from '@angular/core';
import { AccountComponent } from './main-content/account/account.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AccountComponent },
      { path: 'depense', component: DepenseComponent },
      { path: 'epargne', component: EpargneComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
