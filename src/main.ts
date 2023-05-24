import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';

export class App {
  name = 'Angular';
}

bootstrapApplication(RootComponent);
