import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [FormsModule, CardComponent],
})
export class SharedModule {}
