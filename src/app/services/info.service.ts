import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetitionModel } from '../models/PetitionModel';
import { AnswerModel } from '../models/AnswerModel';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:HttpClient) { }

  infoUrl = "https://back-matt.onrender.com/info"
  
  infoManager(petition: PetitionModel):Observable<AnswerModel>{
    return this.http.post<AnswerModel>(this.infoUrl, petition);
  }
}