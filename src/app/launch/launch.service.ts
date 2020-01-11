import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from './launch';
@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  apiURL = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {
  }
  //
  public getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiURL + '/launches');
  }


}