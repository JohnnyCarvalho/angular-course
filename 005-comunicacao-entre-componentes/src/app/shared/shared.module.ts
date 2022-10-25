import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [InputComponent, OutputComponent],
  exports: [InputComponent, OutputComponent],
  imports: [CommonModule],
})
export class SharedModule {}
