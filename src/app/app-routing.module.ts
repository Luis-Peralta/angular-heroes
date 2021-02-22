import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path:'heroes', component: HeroesComponent },
  { path:'detalles/:id', component: DetallesComponent },
  { path:'**', pathMatch:'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
