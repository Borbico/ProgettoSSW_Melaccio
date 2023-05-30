import { infolibro } from './infolibro';
import { ArchivioService } from './archivio.service';
import { AjaxResponse } from 'rxjs/ajax';

export class Archivio {
  archivio: Array<infolibro> = [];
  ar: ArchivioService;
  constructor(ar: ArchivioService) {
    this.ar = ar;
    this.ar.getArchivio().subscribe({
      next: (x: AjaxResponse<any>) => (this.archivio = JSON.parse(x.response)),
      error: (e) =>
        console.error(
          "Errore di acquisizione dell'archivio: " + JSON.stringify(e)
        ),
    });
  }

  public acquisisciLibro(infolibro: infolibro) {
    this.archivio.push(infolibro);
    this.ar.setArchivio(this.archivio).subscribe({
      next: (data: AjaxResponse<any>) => console.log(data.response),
      error: (e) =>
        console.error('Errore di acquisizione del libro: ' + JSON.stringify(e)),
    });
  }

  public rimuoviLibro(infolibro: infolibro) {
    const archivioaggiornato = this.archivio.filter(
      (eliminare) => eliminare.titolo !== infolibro.titolo
    );
    this.ar.setArchivio(archivioaggiornato).subscribe({
      next: (data: AjaxResponse<any>) => {
        this.archivio = archivioaggiornato;
        console.log(data.response);
      },
      error: (e) =>
        console.error('Errore di eliminazione del libro: ' + JSON.stringify(e)),
    });
  }

  public prestitoLibro(infolibro: infolibro, prestatario: string) {
    const libroprestato = this.archivio.find(
      (prestato) => prestato.titolo == infolibro.titolo
    );
    const indiceprestato = this.archivio.findIndex(
      (prestato) => prestato.titolo === infolibro.titolo
    );
    if (libroprestato) {
      libroprestato.prestatario = prestatario;
      this.archivio.splice(indiceprestato, 1, libroprestato);
      this.ar.setArchivio(this.archivio).subscribe({
        next: (data: AjaxResponse<any>) => console.log(data.response),
        error: (e) =>
          console.error('Errore sul prestito del libro: ' + JSON.stringify(e)),
      });
    }
  }
}
