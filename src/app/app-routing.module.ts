import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';

const routes: Routes = [
  { path: 'memories', component: MemoriesComponent },
  { path: '', redirectTo: '/memories', pathMatch: 'full' },
  { path: 'memory/:id', component: MemoryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
