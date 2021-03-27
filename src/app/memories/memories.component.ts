import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss']
})

export class MemoriesComponent implements OnInit {

  memories!: Memory[];

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.getMemories();
  }

  getMemories(): void {
    this.memoryService.getMemories()
      .subscribe(memories => this.memories = memories);
  }

}
