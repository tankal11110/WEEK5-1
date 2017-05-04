import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <table class="table table-striped"> 
        <thead> 
            <tr> 
                <th>#</th> 
                <th>Title</th> 
                <th>Tracks</th> 
                <th>Favourite</th> 
            </tr> 
        </thead> 
        <tbody> 

            <tr *ngFor = "let playlist of playlists; let i=index"
             class="playlist-row" [ngClass]="{ 'mouse_active': selected == playlist}" 
             [ngStyle]="{ borderBottomColor: playlist.color, color: playlist.active == true ? playlist.color : '' }"
             (mouseenter)="select(playlist); playlist.active = true; "
             (mouseleave)="select(null); playlist.active = false"> 
                <th scope="row">{{i+1}}</th> 
                <td>{{playlist.name}}</td> 
                <td>{{playlist.tracks}}</td> 
                <td>
                    <input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation();"> 
                </td> 
            </tr> 
        </tbody> 
    </table>
  `,
  styles: [`
    .playlist-row{
        border-bottom: 2px solid transparent;
    }
    .mouse_active{
        background-color: #ada9a9 !important;
        font-size: 130%;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

    newColor;
  @Output('selected')
  onSelected = new EventEmitter();

  @Output('leaved')
  onLeaved = new EventEmitter();

  @Input()
  playlists;

  @Input()
  selected;

  select(playlist){
      this.onSelected.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
