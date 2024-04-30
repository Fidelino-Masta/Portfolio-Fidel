import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio-Fidel';

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  cardAngular = false
  cardCss = false
  cardHtml = false
  cardJs = false
  cardJava = false
  cardTypescript = false
  cardSass = false

  mouseEnterAngular() {
    this.cardAngular = true
  }
  mouseOutAngular() {
    this.cardAngular = false
  }


  mouseEnterCss() {
    this.cardCss = true
  }
  mouseOutCss() {
    this.cardCss = false
  }


  mouseEnterHtml() {
    this.cardHtml = true
  }
  mouseOutHtml() {
    this.cardHtml = false
  }

  mouseEnterJs() {
    this.cardJs = true
  }
  mouseOutJs() {
    this.cardJs = false
  }

  mouseEnterJava() {
    this.cardJava = true
  }
  mouseOutJava() {
    this.cardJava = false
  }

  mouseEnterTypescript() {
    this.cardTypescript = true
  }
  mouseOutTypescript() {
    this.cardTypescript = false
  }

  mouseEnterSass() {
    this.cardSass = true
  }
  mouseOutSass() {
    this.cardSass = false
  }
}
