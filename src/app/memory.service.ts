import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Memory } from './memory';
import { MEMORIES } from './mock-memories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private getMemoriesUrl = 'http://memorygram-backend.herokuapp.com/memories';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getMemories(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.getMemoriesUrl);
  }

  getMemory(id: string): Observable<Memory> {
    // For now, assume that a memory with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const memory = MEMORIES.find(m => m.id === id) as Memory;
    return of(memory);
  }
}
