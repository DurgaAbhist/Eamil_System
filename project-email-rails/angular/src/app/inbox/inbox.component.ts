import { Component, OnInit } from '@angular/core';
import { SentService } from '../sent/sent.service';
import { Response, Http } from '@angular/http';
import { Inbox } from './inbox.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
   private postURL = 'http://localhost:3000/mails';

  constructor( private sentService: SentService,
               private http: Http) { }

  ngOnInit() {
       this.http.get(this.postURL)
          .subscribe((response: Response) => this.sentService.sentMails = <Inbox[]>response.json())
  }

}
