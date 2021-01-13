import { Directive, HostBinding, HostListener } from '@angular/core';

// anchor.addEventListener('click', function () {});

@Directive({
  selector: '[ngrNavbarToggler]',
  exportAs: 'nbToggler',
})
export class NavbarTogglerDirective {
  private showNavbarMenu = false;

  constructor() {}

  @HostBinding('style.border')
  get border() {
    return '4px solid yellow';
  }

  @HostBinding('class.is-active')
  get className() {
    return this.showNavbarMenu;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log(event);
    this.showNavbarMenu = !this.showNavbarMenu;
  }

  isNavbarMenuActive() {
    return this.showNavbarMenu;
  }
}
