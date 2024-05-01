import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  frases: string[] = [
    '"Codificar o futuro, linha por linha."',
    '"Programação: transformando ideias em realidade."',
    '"A programação move o mundo digital."',
    '"Código é a linguagem da inovação."',
    '"Programar: criando soluções para o mundo."'
  ];
  fraseAtualIndex = 0;
  textAnimated = '';

  ngOnInit(): void {
    this.animarTexto();
  }

  async animarTexto(): Promise<void> {
    while (true) {
      const fraseAtual = this.frases[this.fraseAtualIndex];
      for (let i = 0; i <= fraseAtual.length; i++) {
        this.textAnimated = fraseAtual.slice(0, i);
        await this.delay(150); // Ajuste o tempo de espera conforme necessário
      }

      for (let i = fraseAtual.length; i >= 0; i--) {
        this.textAnimated = fraseAtual.slice(0, i);
        await this.delay(50); // Ajuste o tempo de espera conforme necessário
      }

      this.fraseAtualIndex = (this.fraseAtualIndex + 1) % this.frases.length;
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




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
  cardFigma = false
  cardIonic = false

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

  mouseEnterFigma() {
    this.cardFigma = true
  }
  mouseOutFigma() {
    this.cardFigma = false
  }

  mouseEnterIonic() {
    this.cardIonic = true
  }
  mouseOutIonic() {
    this.cardIonic = false
  }
}
