import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Song from '../model/song';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  uri = 'http://localhost:9090/oac/songs/';

  constructor(private http: HttpClient) { }

  saveSong(song:Song): Observable<Song> {
    return this.http.post(this.uri, song);
  }

  getSongWithId(id:number): Observable<Song> {
    return this.http.get(this.uri+id);
  }

  delete(id:number): Observable<Song> {
    return this.http.delete(this.uri+id);
  }

  update(id:number, song:Song): Observable<Song> {
    return this.http.put(this.uri+id, song);
  }

  getAllSongs(): Observable<Song[]> {
    return this.http.get(this.uri);
  }
}
