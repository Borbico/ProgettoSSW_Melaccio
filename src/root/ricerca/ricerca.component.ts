import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { infolibro } from '../infolibro';
import { Archivio } from '../archivio';
import { ArchivioService } from '../archivio.service';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { PrestitoComponent } from './prestito/prestito.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [CommonModule, RimozioneComponent, PrestitoComponent],
})
export class RicercaComponent implements OnInit {
  @Input() ricerca: number;
  @Input() acquisizione!:number;
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

  titolo!: string;
  autore!: string;
  posizione!: string;
  prestatario!:string;

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
      this.trovati = 1;
      this.libroSelezionato = libriTrovati[0];
      this.titolo = this.libroSelezionato.titolo;
      this.autore = this.libroSelezionato.autore;
      this.posizione = this.libroSelezionato.posizione;
      this.prestatario = this.libroSelezionato.prestatario;
    } else {
      this.trovati = libriTrovati.length;
    }
  }

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
