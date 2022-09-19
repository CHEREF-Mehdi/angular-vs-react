import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItoDoItem, ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit, OnDestroy, DoCheck {
  toDoList: ItoDoItem[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  toDoListMapped: string[] = [];

  constructor(private toDoListService: ToDoListService) {}

  ngOnInit() {
    console.log('ngOnInit');

    //retrieve data from API
    this.toDoListService.getToDoList();

    //subscribe to object change
    this.toDoListService.toDoList
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.toDoList = data;
      });
  }

  ngDoCheck() {
    console.log('ngDoCheck');

    this.toDoListMapped = this.toDoList.map(
      (toDoItem) => toDoItem.name + ' ==> ' + toDoItem.description
    );
  }

  removeItem(index: number) {
    this.toDoListService.removeToDoItem(index);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
