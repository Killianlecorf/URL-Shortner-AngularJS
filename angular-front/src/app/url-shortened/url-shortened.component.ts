import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UrlShortenerService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {env} from '../environment/env'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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

  @Input() name: string = ''
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>()

  allUrls = this.urlShortnerService.getAllUrls()

  constructor(private readonly urlShortnerService: UrlShortenerService) {}

  sendMessage() {
    this.nameChange.emit('Bien reçu')
  }

  form: FormGroup = new FormGroup({
    url: new FormControl('')
  });

  onSubmit() {
    const url = this.form.get('url')?.value;
    alert(`url: ${url}`);
  }

}