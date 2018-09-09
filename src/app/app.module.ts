import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicturesComponent } from './pictures/pictures.component';
import { MusicComponent } from './music/music.component';
import { FilesComponent } from './files/files.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    MusicComponent,
    FilesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
