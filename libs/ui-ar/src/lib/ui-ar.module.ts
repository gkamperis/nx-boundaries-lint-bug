import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiArRoutes } from './lib.routes';
import { ArMainComponent } from './ar-main/ar-main.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiArRoutes)],
  declarations: [ArMainComponent],
  exports: [ArMainComponent],
})
export class UiArModule {}
