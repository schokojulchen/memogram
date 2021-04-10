import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriesComponent } from './memories/memories.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './profile/profile.component';
import { AuthButtonComponent } from './profile/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoriesComponent,
    MemoryDetailComponent,
    MenuComponent,
    ProfileComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
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
