import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UrlShortenerService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {env} from '../environment/env'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UrlShortener } from '../interfaces/url-Shortener';

@Component({
  selector: 'app-url-shortened',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [UrlShortenerService],
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.css',
})
export class UrlShortenedComponent {

  env = env
  urlFC = new FormControl<string>('', {nonNullable: true})
  urls: UrlShortener[] = []

  allUrls = this.urlShortenerService.getAllUrls()

  constructor(private readonly urlShortenerService: UrlShortenerService) {
    this.allUrls.subscribe((res) => {
      this.urls = res
    })
  }

  @Input() name: string = ''
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>()



  sendMessage() {
    this.nameChange.emit('Bien reçu')
  }

  form: FormGroup = new FormGroup({
    originalUrl: new FormControl('')
  });

  onSubmit() {
    this.urlShortenerService.createShortUrl(this.form.getRawValue().originalUrl).subscribe((res) => {
      this.urls.push(res)
      this.form.controls['originalUrl'].setValue('')
    })
  }
}