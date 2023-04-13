import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules, FormsModule, ReactiveFormsModule],
  exports: [...materialModules, FormsModule, ReactiveFormsModule],
})
export default class SharedModule {}
