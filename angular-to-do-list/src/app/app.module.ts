import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ReactAppComponent } from './react-component/react-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReactAppComponent
  ],
  imports: [
    BrowserModule,
    ToDoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
