import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-excluir-mesa',
  templateUrl: './modal-excluir-mesa.component.html',
  styleUrls: ['./modal-excluir-mesa.component.css']
})
export class ModalExcluirMesaComponent {
  constructor(private router: Router) { }

  ExcluirMesa() {

    console.log('Estou a caminho de excluir a Mesa');
    console.log('Ovo Exclui');
    $.post(
      `https://kwr3pd-4200.csb.app/excluirMesa`,
      {
      },
      (res) => {
        console.log(res);
        alert(res);
        window.location.reload();
      }
    );
  }
  closeModal() {
    window.location.reload()
  }
}
