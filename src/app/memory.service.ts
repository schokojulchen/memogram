import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Memory } from './memory';
import { MEMORIES } from './mock-memories';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor() { }

  getMemories(): Observable<Memory[]> {
    const memories = of(MEMORIES);
    return memories;
  }

  getMemory(id: number): Observable<Memory> {
    // For now, assume that a memory with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const memory = MEMORIES.find(m => m.id === id) as Memory;
    return of(memory);
  }
}
