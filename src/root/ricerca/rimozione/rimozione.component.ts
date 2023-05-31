import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { infolibro } from '../../infolibro';
import { Archivio } from '../../archivio';
import { ArchivioService } from '../../archivio.service';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class RimozioneComponent implements OnInit {
  @Input() libroSelezionato: infolibro;
  @Input() archivioAttuale: Archivio = new Archivio(this.ar);

  eliminaLibro() {
    this.archivioAttuale.rimuoviLibro(this.libroSelezionato);
  }

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
