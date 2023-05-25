export class infolibro {
  titolo: string;
  autore: string;
  posizione: string;
  prestatario: string;
  constructor(
    titolo: string,
    autore: string,
    posizione: string,
    prestatario: string
  ) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.prestatario = prestatario;
  }
}