import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { room } from './room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService  {

  private apiurl = 'http://localhost:8080'; // Remplacez avec l'URL de votre endpoint Spring Boot

  constructor(private http: HttpClient) { }
  getGroupRooms(): Observable<any> {
    return this.http.get('/api/v1/GroupRoom');
  }

  getServiceAreas(): Observable<any> {
    return this.http.get('/api/v1/serviceArea');
  }

  getServices(): Observable<any> {
    return this.http.get('/api/v1/service');
  }
  getRooms(): Observable<room[]> {
    const url = `${this.apiurl}/api/v1/Room`;
    return this.http.get<room[]>(url);
  }
}
