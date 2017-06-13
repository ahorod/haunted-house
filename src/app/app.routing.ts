import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ChoiceOneComponent } from './choice-one/choice-one.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
    }, {
      path: 'characters/:id',
      component: CharacterDetailComponent
    }, {
      path: 'new-character',
      component: NewCharacterComponent
    }, {
    path: 'characters/:id/choice-one',
    component: ChoiceOneComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
