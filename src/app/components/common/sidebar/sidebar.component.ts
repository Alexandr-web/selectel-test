import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  protected readonly list = [
    { text: 'Главная', link: '/' },
    { text: 'Вторая страница', link: '/new-page' },
  ];
}
