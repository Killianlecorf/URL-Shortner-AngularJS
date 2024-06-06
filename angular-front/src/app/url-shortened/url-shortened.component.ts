import { Component } from '@angular/core';
import { UrlShortenerService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-url-shortened',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UrlShortenerService],
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.css'
})
export class UrlShortenedComponent {
  
  allUrls = this.urlShortnerService.getAllUrls()

  constructor(private readonly urlShortnerService: UrlShortenerService) {}
}