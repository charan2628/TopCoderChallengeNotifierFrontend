import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard.component';
import { ConfigComponent } from './config/config.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ConfigComponent,
    ChallengesComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []
})
export class DashboardModule { }
