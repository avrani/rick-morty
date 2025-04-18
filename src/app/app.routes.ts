import { Routes } from '@angular/router';
import { CharectersListComponent } from './charecters-list/charecters-list.component';
import { CharecterDetailPageComponent } from './charecter-detail-page/charecter-detail-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
export const routes: Routes = [
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: CharectersListComponent },
    { path: 'details/:id', component: CharecterDetailPageComponent },
    { path: 'episode', component: EpisodePageComponent },
    

];
