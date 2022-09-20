import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { ReactApp } from "./ReactApp";

// should add react to global window object
window.React = React;

@Component({
  selector: "react-app",
  template: "<div #reactAppRoot></div>",
})
export class ReactAppComponent implements OnDestroy, AfterViewInit {
  @ViewChild("reactAppRoot", { static: false })
  containerRef: ElementRef | null = null;
  reactRoot: Root | null = null;

  constructor() {}

  ngAfterViewInit() {
    this.reactRoot = createRoot(this.containerRef?.nativeElement);
    this.reactRoot.render(<ReactApp />);
  }

  ngOnDestroy() {
    this.reactRoot?.unmount();
  }
}
