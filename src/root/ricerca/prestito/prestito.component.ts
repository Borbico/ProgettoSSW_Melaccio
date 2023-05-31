import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { infolibro } from '../../infolibro';
import { Archivio } from '../../archivio';
import { ArchivioService } from '../../archivio.service';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class PrestitoComponent implements OnInit {
  @Input() libroSelezionato: infolibro;
  @Input() archivioAttuale: Archivio = new Archivio(this.ar)

  prestaLibro() {
    var nomePrestatario: HTMLInputElement = document.getElementById('prestatario') as HTMLInputElement;
    this.archivioAttuale.prestitoLibro(this.libroSelezionato, nomePrestatario.value)
  }

  restituisciLibro() {
    this.archivioAttuale.prestitoLibro(this.libroSelezionato, 'undefined');
  }

  constructor(private ar: ArchivioService) {}

  ngOnInit() {
  }

}