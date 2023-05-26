import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { infolibro } from '../infolibro';
import { Archivio } from '../archivio';
import { ArchivioService } from '../archivio.service';

@Component({
  selector: 'app-acquisizione',
  templateUrl: './acquisizione.component.html',
  styleUrls: ['./acquisizione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AcquisizioneComponent implements OnInit {
  @Input() acquisizione: number;
  @Input() archivioAttuale: Archivio;
  @Output() resetAcquisizione = new EventEmitter<number>();

  setAcquisizione(valore: number) {
    this.acquisizione = valore;
    this.resetAcquisizione.emit(this.acquisizione);
  }

  acquisisciLibro() {
    var titolo: HTMLInputElement = document.getElementById(
      'titolo'
    ) as HTMLInputElement;
    var autore: HTMLInputElement = document.getElementById(
      'autore'
    ) as HTMLInputElement;
    var posizione: HTMLInputElement = document.getElementById(
      'posizione'
    ) as HTMLInputElement;
    const nuovoLibro = new infolibro(
      titolo.value,
      autore.value,
      posizione.value,
      'undefined'
    );
    this.archivioAttuale.acquisisciLibro(nuovoLibro);
    this.setAcquisizione(0);
  }

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
