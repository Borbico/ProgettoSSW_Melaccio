import { infolibro } from './infolibro';
import { ArchivioService } from './archivio.service';
import { AjaxResponse } from 'rxjs/ajax';

export class Archivio {
  archivio: Array<infolibro> = [];
  archivioremoto: ArchivioService;
  constructor(archivioremoto: ArchivioService) {
    this.archivioremoto = archivioremoto;
    this.archivioremoto.getArchivio().subscribe({
      next: (x: AjaxResponse<any>) => (this.archivio = JSON.parse(x.response)),
      error: (err) => console.error('Errore di acquisizione dell\'archivio: ' + JSON.stringify(err))
    });
  }
  
}