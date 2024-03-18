import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatListModule,
    MatCardModule
  ],
})
export class MaterialModule {}