import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './components/admin/client-list/client-list.component';
const routes: Routes = [
  {path: 'client-list', component: ClientListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
