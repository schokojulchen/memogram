import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryInputComponent } from './memory-input/memory-input.component';

const routes: Routes = [
  { path: 'memories', component: MemoriesComponent },
  { path: '', redirectTo: '/memories', pathMatch: 'full' },
  { path: 'memory/:id', component: MemoryDetailComponent },
  { path: 'newMemory', component: MemoryInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
