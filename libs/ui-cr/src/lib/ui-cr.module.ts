import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiCrRoutes } from './lib.routes';
import { CrMainComponent } from './cr-main/cr-main.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiCrRoutes)],
  declarations: [CrMainComponent],
  exports: [CrMainComponent],
})
export class UiCrModule {}
