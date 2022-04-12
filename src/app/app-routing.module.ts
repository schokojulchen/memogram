import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { MemoryInputComponent } from './memory-input/memory-input.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'memories', component: MemoriesComponent, canActivate: [AuthGuard], },
  { path: '', redirectTo: '/memories', pathMatch: 'full' },
  { path: 'memory/:id', component: MemoryDetailComponent, canActivate: [AuthGuard], },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], },
  { path: 'newMemory', component: MemoryInputComponent, canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
