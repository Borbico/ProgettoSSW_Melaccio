import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { infolibro } from '../infolibro';
import { Archivio } from '../archivio';
import { ArchivioService } from '../archivio.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RicercaComponent implements OnInit {
  @Input() ricerca!: number;
  @Input() archivioAttuale = new Archivio(this.ar);

  setRicerca(valore: number) {
    this.ricerca = valore;
  }

  costruisciArchivio() {
    this.ar.getArchivio().subscribe({
      next: (data: AjaxResponse<any>) => console.log(data.response),
      error: (e) =>
        console.error(
          "Errore di acquisizione dell'archivio: " + JSON.stringify(e)
        ),
    });
  }

  libroSelezionato!: infolibro;
  trovati: number = 0;

  eseguiRicerca() {
    let libri = this.archivioAttuale.archivio;
    let nodoRicerca: HTMLInputElement = document.getElementById(
      'ricerca'
    ) as HTMLInputElement;
    let stringa = nodoRicerca.value;
    const libriTrovati = libri.filter((libro) =>
      (libro.titolo + libro.autore).toLowerCase().includes(stringa)
    );
    if (libriTrovati.length === 1) {
      this.setRicerca(3);
      this.trovati = 1;
      this.libroSelezionato = libriTrovati[0];
    } else {
      this.trovati = libriTrovati.length;
    }
  }

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
