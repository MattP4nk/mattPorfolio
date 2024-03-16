import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommsDto } from '../models/CommsDto';
import { AnswerModel } from '../models/AnswerModel';

@Injectable({
  providedIn: 'root'
})
export class MuseService {

  constructor(private http:HttpClient) { }

  museUrl = "https://back-matt.onrender.com/muse"

  museManager(museCmd: CommsDto){
    return this.http.post<AnswerModel>(this.museUrl, museCmd);
  }
}
