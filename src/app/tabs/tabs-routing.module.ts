import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'index',
        loadChildren: () => import('../index/index.module').then(m => m.IndexPageModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('../about-me/about-me.module').then(m => m.AboutMePageModule)
      },
      {
        path: 'career',
        loadChildren: () => import('../career/career.module').then(m => m.CareerPageModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioPageModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('../skills/skills.module').then(m => m.SkillsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
