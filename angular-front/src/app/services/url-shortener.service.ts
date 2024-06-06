import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UrlShortener } from "../interfaces/url-Shortener";
import { env } from "../environment/env";
import { Injectable } from "@angular/core";

@Injectable()
export class UrlShortenerService {

    constructor(private readonly httpclient: HttpClient) {}

    getAllUrls(): Observable<UrlShortener[]> {
        return this.httpclient.get<UrlShortener[]>(env.baseApiUrl)
    }

}