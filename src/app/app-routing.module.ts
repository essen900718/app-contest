import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'backpack',
    loadChildren: () => import('./backpack/backpack.module').then( m => m.BackpackPageModule)
  },
  {
    path: 'cloth',
    loadChildren: () => import('./cloth/cloth.module').then( m => m.ClothPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
  path: '',
  redirectTo: '/welcome',
  pathMatch: 'full'
  },

  {
    path: 'speech',
    loadChildren: () => import('./speech/speech.module').then( m => m.SpeechPageModule)
  },
  {
    path: 'microlesson',
    loadChildren: () => import('./microlesson/microlesson.module').then( m => m.MicrolessonPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
