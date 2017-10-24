import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { SpamService } from '../spam.service';

@Component({
  selector: 'app-spam-display',
  templateUrl: './spam-display.component.html',
  styleUrls: ['./spam-display.component.css']
})
export class SpamDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private spamService: SpamService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['index'];
          this.mail = this.spamService.getMail(this.id);
      }
     );
  }

}
