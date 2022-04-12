import { Injectable } from '@angular/core';
import { Media } from './media';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private getMediaUrl = 'https://memorygram-backend.herokuapp.com/media';  // URL to web api

  constructor(private http: HttpClient) { }

  getMedia(id: string): Observable<Media> {
    return this.http.get<Media>(this.getMediaUrl + '/' + id);
  }
}
