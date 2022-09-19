import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ItoDoItem {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  allToDo: ItoDoItem[] = [
    { id: 0, name: 'Yoga', description: 'Tomorow at noone' },
    { id: 1, name: 'Client Meet', description: 'Prepare furniture list' },
    { id: 2, name: 'Call Mom', description: '' },
    { id: 3, name: 'Shopping', description: 'Prepare shopping list' },
  ];

  toDoList = new BehaviorSubject<ItoDoItem[]>([]);

  timeoutId: any = null;

  constructor() {}

  async getToDoList() {
    const toDoListFromAPI = await new Promise<ItoDoItem[]>((resolve) => {
      this.timeoutId = setTimeout(() => {
        resolve(this.allToDo);
      }, 2000);
    }).then((allToDo) => {
      clearTimeout(this.timeoutId);
      return allToDo;
    });
    this.toDoList.next(toDoListFromAPI);
  }

  removeToDoItem(index: number) {
    this.allToDo = this.allToDo.filter((item, i) => index !== i);
    this.toDoList.next(this.allToDo);
  }
}
