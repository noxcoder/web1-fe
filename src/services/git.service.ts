import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private _http: HttpClient) { }

  download(): Observable<any> {
    return this._http.get("https://github.com/noxcoder/web1-fe/archive/refs/heads/main.zip", {
      responseType: 'arraybuffer'
    })
}}
