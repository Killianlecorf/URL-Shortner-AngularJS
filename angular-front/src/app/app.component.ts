import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlShortenedComponent } from './url-shortened/url-shortened.component';
import { UrlShortenerService } from './services/url-shortener.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlShortenedComponent],
  providers: [UrlShortenerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allUrls = this.urlShortnerService.getAllUrls()

  constructor(private readonly urlShortnerService: UrlShortenerService) {}
}