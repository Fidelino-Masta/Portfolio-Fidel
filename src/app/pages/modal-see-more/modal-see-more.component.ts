import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-see-more',
  templateUrl: './modal-see-more.component.html',
  styleUrls: ['./modal-see-more.component.scss']
})
export class ModalSeeMoreComponent {
  tipoConteudo: string | undefined;
  modalAberta = true

  constructor() { }

  abrirModal(tipo: string): void {
    this.tipoConteudo = tipo;
    this.modalAberta = true;
  }

  fecharModal(): void {
    this.modalAberta = false;
  }

  fecharModalFora(event: Event): void {
    if (event.target === event.currentTarget) { // Verifica se o clique foi fora da modal
      this.fecharModal(); // Chama a função fecharModal para fechar a modal
    }
  }
}
