import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss']
})
export class ContentModalComponent {
  @Input() tipoConteudo: string | undefined;

  constructor() { }

  isTexto(): boolean {
    return this.tipoConteudo === 'texto';
  }

  isImagem(): boolean {
    return this.tipoConteudo === 'imagem';
  }

  isFormulario(): boolean {
    return this.tipoConteudo === 'formulario';
  }
}
