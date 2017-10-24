import { Inbox } from '../inbox/inbox.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SentService {
   sentChanged = new Subject<Inbox[]>();
   sentMails: Inbox[] = [];
   private postURL = 'http://localhost:3000/mails';

   constructor(private http: Http) {}

   getMails() {
      return this.sentMails;
   }

   getMail(index: number) {
      return this.sentMails[index];
  }


   addMail(newMail: Inbox) {
      this.sentMails.push(newMail);
      this.sentChanged.next(this.sentMails.slice());
   }

   updateMails(newMail: Inbox) {
      this.sentMails.push(newMail);
      this.sentChanged.next(this.sentMails.slice());
   }
}
