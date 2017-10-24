import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { InboxStartComponent } from './inbox/inbox-start/inbox-start.component';
import { InboxDisplayComponent } from './inbox/inbox-display/inbox-display.component';
import { InboxComposeComponent } from './inbox/inbox-compose/inbox-compose.component';
import { SentComponent } from './sent/sent.component';
import { SentStartComponent } from './sent/sent-start/sent-start.component';
import { SentDisplayComponent } from './sent/sent-display/sent-display.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftsDisplayComponent } from './drafts/drafts-display/drafts-display.component';
import { DraftsStartComponent } from './drafts/drafts-start/drafts-start.component';
import { SpamComponent } from './spam/spam.component';
import { SpamDisplayComponent } from './spam/spam-display/spam-display.component';
import { SpamStartComponent } from './spam/spam-start/spam-start.component';
import { TrashComponent } from './trash/trash.component';
import { TrashStartComponent } from './trash/trash-start/trash-start.component';
import { TrashDisplayComponent } from './trash/trash-display/trash-display.component';
import { StarredComponent } from './starred/starred.component';
import { StarredStartComponent } from './starred/starred-start/starred-start.component';
import { StarredDisplayComponent } from './starred/starred-display/starred-display.component';
import { ImportantComponent } from './important/important.component';
import { ImportantStartComponent } from './important/important-start/important-start.component';
import { ImportantDisplayComponent } from './important/important-display/important-display.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/inbox', pathMatch: 'full'},
   { path: 'inbox', component: InboxComponent, children: [
      { path: '', component: InboxStartComponent},
      { path: ':id', component: InboxDisplayComponent}
   ]},
   { path: 'new', component: InboxComposeComponent},
   { path: 'sent', component: SentComponent, children: [
      {path: '', component: SentStartComponent},
      {path: ':index', component: SentDisplayComponent}
   ] },
   { path: 'drafts', component: DraftsComponent, children: [
      {path: '', component: DraftsStartComponent},
      {path: ':index', component: DraftsDisplayComponent}
   ]},
   { path: 'spam', component: SpamComponent, children: [
      {path: '', component: SpamStartComponent},
      {path: ':index', component: SpamDisplayComponent}
   ]},
   { path: 'trash', component: TrashComponent, children: [
      {path: '', component: TrashStartComponent},
      {path: ':index', component: TrashDisplayComponent}
   ]},
   { path: 'starred', component: StarredComponent, children: [
      {path: '', component: StarredStartComponent},
      {path: ':index', component: StarredDisplayComponent}
   ]},
   { path: 'important', component: ImportantComponent, children: [
      {path: '', component: ImportantStartComponent},
      {path: ':index', component: ImportantDisplayComponent}
   ]},
];

@NgModule({
   imports: [
      RouterModule.forRoot(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})

export class AppRoutingModule {

}
