import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  baseUrl = 'https://localhost:44300/api/cards';

  // options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  constructor(private http: HttpClient) {}

  // get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

  // add a card
  addCard(card: Card): Observable<Card> {
    card.id = '00000000-0000-0000-0000-000000000000';

    // return this.http.post<Card>(this.baseUrl, JSON.stringify({ Card: card }));
    return this.http.post<Card>(this.baseUrl, card);
  }

  // delete a card via id
  deleteCard(id: string): Observable<Card> {
    // return this.http.delete<Card>(this.baseUrl + '/' + id);

    return this.http.request<Card>('delete', this.baseUrl + '/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // update a card with id and body
  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.baseUrl + '/' + card.id, card);
  }
}
