import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent  } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent,
  },

  {
    path: 'projects' ,
    component: ProjectsComponent,
  },

  {
    path: 'profile' ,
    component: ProfileComponent,
  },

  {
    path: '**' ,
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
