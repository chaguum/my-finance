import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    PrimengModule,
    FormsModule,
  ],
})
export class SharedModule { }
