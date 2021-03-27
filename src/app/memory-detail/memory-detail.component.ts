import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memory-detail',
  templateUrl: './memory-detail.component.html',
  styleUrls: ['./memory-detail.component.scss']
})
export class MemoryDetailComponent implements OnInit {

  memory!: Memory;

  constructor(
    private route: ActivatedRoute,
    private memoryService: MemoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getMemory();
  }

  getMemory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.memoryService.getMemory(+id)
        .subscribe(memory => this.memory = memory);
    } else {
      console.log('id is null');
    }

  }

}
