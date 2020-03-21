import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open Source Corona Project';
  links = [
    {
      label: 'Home', routerLink: ['']
    },
    {
      label: 'Countries', routerLink: ['/countries']
    },
    {
      label: 'Information', routerLink: ['/information']
    },
    {
      label: 'APIs', routerLink: ['/apis']
    },
    {
      label: 'Developers', routerLink: ['/developers']
    },
    {
      label: 'About', routerLink: ['/about']
    },
  ];
}
