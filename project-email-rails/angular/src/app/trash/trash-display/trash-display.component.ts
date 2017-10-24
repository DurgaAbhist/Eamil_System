import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { TrashService } from '../trash.service';

@Component({
  selector: 'app-trash-display',
  templateUrl: './trash-display.component.html',
  styleUrls: ['./trash-display.component.css']
})
export class TrashDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private trashService: TrashService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
     (params: Params) => {
          this.id = +params['index'];
          this.mail = this.trashService.getMail(this.id);
     }
     );
  }

}
