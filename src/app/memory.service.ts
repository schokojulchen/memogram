import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Memory } from './memory';
import { MEMORIES } from './mock-memories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private getMemoriesUrl = 'https://memorygram-backend.herokuapp.com/memories';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getMemories(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.getMemoriesUrl);
  }

  getMemory(id: string): Observable<Memory> {
    return this.http.get<Memory>(this.getMemoriesUrl + '/' + id);
  }

  createMemory(formData: FormData): void {

    /*const formDataC = new FormData();
    formDataC.append('text', 'Hey ein cooler Text');
    formDataC.append('tags', 'eins,zwei,drei');
    formDataC.append('creationDate', '2021-04-07T19:02:57.860Z');
    formDataC.append('media', '/assets.picPlaceholder.jpg');*/

    this.http.post<any>('https://memorygram-backend.herokuapp.com/memories', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
