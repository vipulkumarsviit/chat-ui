import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScsChatComponent } from './scs-chat/scs-chat.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'store-onboard', pathMatch: 'full'
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
