import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { MediaService } from '../media.service';


@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss']
})

export class MemoriesComponent implements OnInit {

  memories!: Memory[];

  constructor(
    private memoryService: MemoryService,
    private mediaService: MediaService) { }

  ngOnInit(): void {
    this.getMemories();
  }

  getMemories(): void {
    this.memoryService.getMemories().subscribe(response => {
      // do something with response
      this.memories = response;
    }, err => {
      console.log(err);
    }, () => {
      console.log('completed');
    });
  }

  getSafeImageUrl(memory: Memory): string {

    if (memory.media != null && memory.media.length > 0) {
      return 'https://memorygram-backend.herokuapp.com/media/' + memory.media[0].id;
    }
    return '';

  }



}
