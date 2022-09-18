import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() footerText?: string;

  constructor() {
    console.log('I am from constructor()!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('I am from ngOnChanges()!');
  }

  ngOnInit() {
    console.log('I am from ngOnInit()!');
  }

  ngDoCheck() {
    console.log('I am from ngDoCheck()!');
  }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit()!');
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked()!');
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit()!');
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked()!');
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy()!');
  }
}
