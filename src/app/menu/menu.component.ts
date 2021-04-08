import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
  }

  testCreateMemory(): void {
    this.memoryService.createMemory(new FormData());
  }

}
