import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from './ricerca/ricerca.component';
import { AcquisizioneComponent } from './acquisizione/acquisizione.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [RicercaComponent, AcquisizioneComponent, CommonModule]
})
  
export class RootComponent implements OnInit {
  title: string = 'Servizio di biblioteca online';

  constructor() {}

  ngOnInit() {}
}
