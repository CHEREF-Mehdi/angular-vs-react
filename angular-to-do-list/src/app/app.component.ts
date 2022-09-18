import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-to-do-list';
  timeOutID: NodeJS.Timeout | undefined = undefined;
  showFooter = false;
  footerText = "I'm the footer!";

  ngOnInit(): void {
    this.timeOutID = setTimeout(() => {
      //console.log('updating footerText');

      this.footerText = 'Hello!! I have just changed the my message';
    }, 7000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeOutID);
  }

  toggleFooter() {
    this.showFooter = !this.showFooter;
  }
}
