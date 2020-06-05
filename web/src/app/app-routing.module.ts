import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
