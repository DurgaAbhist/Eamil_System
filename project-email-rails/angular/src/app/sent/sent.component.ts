import { Component, OnInit } from '@angular/core';
import { SentService } from './sent.service';
import { Response, Http } from '@angular/http';
import { Inbox } from '../inbox/inbox.model';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
