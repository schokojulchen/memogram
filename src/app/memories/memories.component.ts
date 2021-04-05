import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  /*this.memoryService.getMemories()
    .subscribe(memories => this.memories = memories);*/
  getMemories(): void {


    this.memoryService.getMemories().subscribe(response => {
      //do something with response
      this.memories = response;
    }, err => {
      console.log(err);
    }, () => {
      console.log('completed');
    });
  }

  getSafeImageUrl(imageUrl: string): SafeResourceUrl {
    return 'data:image/jpeg;base64,' + imageUrl;
  }



}
