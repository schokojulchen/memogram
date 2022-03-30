import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './profile/profile.component';
import { AuthButtonComponent } from './profile/auth-button.component';
import { MemoryInputComponent } from './memory-input/memory-input.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MemoriesComponent,
    MemoryDetailComponent,
    MenuComponent,
    ProfileComponent,
    AuthButtonComponent,
    MemoryInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'masalis.eu.auth0.com',
      clientId: 'MLQDQ16qyZR0EXDitpLKl6fgOQC3hqnI'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
