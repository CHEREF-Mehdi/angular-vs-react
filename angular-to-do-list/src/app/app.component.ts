import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-to-do-list';

  showFooter = false;
  footerText = "I'm the footer!";

  ngOnInit(): void {
    setTimeout(() => {
      console.log('updating footerText');

      this.footerText = "Hello!! I have just changed the my message";
    }, 7000);
  }

  toggleFooter() {
    this.showFooter = !this.showFooter;
  }
}
