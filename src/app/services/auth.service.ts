import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/authModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authUrl = "https://back-matt.onrender.com/auth/login"
  
  auth(user: AuthModel):Observable<any>{
    console.log(this.authUrl)
    return this.http.post<any>(this.authUrl, user);
  }
}
