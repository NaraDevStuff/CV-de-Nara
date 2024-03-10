import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career.module').then( m => m.CareerPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
