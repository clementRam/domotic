import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scenes } from '../models/scenes.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Scene } from '../models/scene.model';
import { ActionResponse } from 'src/app/dashboard/models/actionResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor(private http: HttpClient, private store: Store) { }

  public getScenes(): Observable<Scenes> {
    const params = new HttpParams()
    .set('type', 'scenes');

    return this.http.get<Scenes>(environment.apiUrl, {params: params})
    .pipe(map(scenes => {
      this.store.set(DefaultStoreDataNames.SCENES, scenes.result);
      return scenes;
    }));
  }

  public setScene(scene: Scene): Observable<ActionResponse> {
    const params = new HttpParams()
    .set('type', 'command')
    .append('param', 'switchscene')
    .append('idx', scene.idx)
    .append('switchcmd', 'On')

    return this.http.get<ActionResponse>(environment.apiUrl, {params: params});
  }
}
