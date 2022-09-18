import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}

  @Output() toggleFooterEvt = new EventEmitter();

  toggleFooter() {
    this.toggleFooterEvt.emit();
  }
}
