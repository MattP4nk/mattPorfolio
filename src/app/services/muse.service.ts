import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommsDto } from '../models/CommsDto';
import { AnswerModel } from '../models/AnswerModel';

@Injectable({
  providedIn: 'root'
})
export class MuseService {

  constructor(private http:HttpClient) { }

  museUrl = "http://localhost:3000/muse"

  museManager(museCmd: CommsDto){
    return this.http.post<AnswerModel>(this.museUrl, museCmd);
  }
}
