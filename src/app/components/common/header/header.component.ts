import { Component, inject, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header.html',
})
export class HeaderComponent {
    protected readonly router = inject(Router);
    
    get url() {
        switch (this.router.url) {
            case '/':
                return 'Главная';
            case '/new-page':
                return 'Вторая страница';
            default:
                return 'Неизвестная страница';
        }
    };
}
