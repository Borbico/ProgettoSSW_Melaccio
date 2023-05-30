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
  @Output() resetRicerca = new EventEmitter<number>();

  setRicerca(valore: number) {
    this.ricerca = valore;
    this.resetRicerca.emit(this.ricerca);
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

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
