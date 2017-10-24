import { Inbox } from '../inbox/inbox.model';
import { Subject } from 'rxjs/Subject';

export class SpamService {

      spamChanged = new Subject<Inbox[]>();

      spamMails: Inbox[] = [
         new Inbox(
            'Lucy',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT721FFwvEu3KwUy3w8Jbr6s3hFmx1jAFmaOZui0HRWIW4j6_vSng',
            'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odi',
            'Paypal',
            false,
            false
         ),
         new Inbox(
            'Alice',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVscFlbHG5LFak0KrKXbYRRnsEcXmR9TWRKt2fy7YNTjigHlh5',
            'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odi',
            'Amazon',
            false,
            false
         ),
      ];

      getMails() {
         return this.spamMails;
      }

      getMail(index: number) {
         return this.spamMails[index];
      }

      updateMails(newMail: Inbox) {
         this.spamMails.push(newMail);
         this.spamChanged.next(this.spamMails.slice());
      }
}
