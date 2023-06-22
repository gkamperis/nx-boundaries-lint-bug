import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiBrRoutes } from './lib.routes';
import { BrMainComponent } from './br-main/br-main.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiBrRoutes)],
  declarations: [BrMainComponent],
  exports: [BrMainComponent],
})
export class UiBrModule {}
