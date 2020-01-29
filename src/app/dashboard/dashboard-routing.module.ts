import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RootComponent } from './root/root.component';
import { ConfigComponent } from './config/config.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {path: 'config', component: ConfigComponent},
            {path: 'challenges', component: ChallengesComponent},
            {path: '', component: RootComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
