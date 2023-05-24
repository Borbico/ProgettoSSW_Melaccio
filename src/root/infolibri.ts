export class infolibri {
  titolo: string;
  autore: string;
  posizione: string;
  prestito: string;
  constructor(
    titolo: string,
    autore: string,
    posizione: string,
    prestito: string
  ) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.prestito = prestito;
  }
}