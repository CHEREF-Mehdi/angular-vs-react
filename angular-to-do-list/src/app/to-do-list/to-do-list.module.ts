import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';

@NgModule({
  declarations: [ToDoListComponent],
  exports: [ToDoListComponent],
  imports: [CommonModule],
})
export class ToDoListModule {}
