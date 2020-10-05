import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScsChatComponent } from './scs-chat/scs-chat.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'scs', pathMatch: 'full'
  },
  {
    path: 'scs', component: ScsChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
