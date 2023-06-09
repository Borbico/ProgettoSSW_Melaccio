import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
import { RicercaComponent } from './ricerca/ricerca.component';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component';
import { Archivio } from './archivio';
import { ArchivioService } from './archivio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [RicercaComponent, AcquisizioneComponent, CommonModule],
})
export class RootComponent implements OnInit {
  acquisizione: number = 0;
  ricerca: number = 0;
  archivioAttuale = new Archivio(this.ar);

  setRicerca(valore: number) {
    this.ricerca = valore;
  }

  setAcquisizione(valore: number) {
    this.acquisizione = valore;
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
  title: string = 'Servizio di biblioteca online';

  constructor(private ar: ArchivioService) {}

  ngOnInit() {}
}
