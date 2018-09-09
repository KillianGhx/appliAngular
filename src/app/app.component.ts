import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pictures = true;
  public music = false;
  public videos = false;
  public files = false;
  public setAllfalse(){
    this.pictures = false;
    this.music = false;
    this.videos = false;
    this.files = false;
  }
  showPictures(){
    this.setAllfalse();
    this.pictures = true;
  }
  showMusic(){
    this.setAllfalse();
    this.music = true;
  }
  showVideos(){
    this.setAllfalse();
    this.videos = true;
  }
  showFiles(){
    this.setAllfalse();
    this.files=true;
  }
}
