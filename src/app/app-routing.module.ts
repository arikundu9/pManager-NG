import { ActionBarComponent } from '$/Util/actionBar/actionBar.component';
import { SplitterUtilComponent } from '$/Util/splitterUtil/splitterUtil.component';
import { DashboardComponent } from '@L/dashboard/dashboard.component';
import { LeftPanelComponent } from '@L/left-panel/left-panel.component';
import { RightPanelComponent } from '@L/right-panel/right-panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        // children: [{ path: 'home', component: HomeComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const compDeclaration = [DashboardComponent, LeftPanelComponent, RightPanelComponent, SplitterUtilComponent, ActionBarComponent];
