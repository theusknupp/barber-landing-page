import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Header } from './components/header/header';
import { Gallery } from './components/gallery/gallery';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Banner } from './components/banner/banner';
import { Map } from './components/map/map';


@Component({
  selector: 'app-root',
  imports: [Home, Services, Header, Gallery, Footer, About, Banner, Map],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('barber-landing-page');
}
