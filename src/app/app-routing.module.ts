import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters.component';
import { StoriesComponent } from './components/stories/stories.component';
import { EventsComponent } from './components/events/events.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';


const routes: Routes = [{
  path:'', redirectTo:'/characters',pathMatch:'full'
},
{
  path:'characters',component: CharactersComponent
},
{
  path: 'comics/:id',
  component: ComicsComponent
},
{
  path: 'events/:id',
  component: EventsComponent
},
{
  path: 'series/:id',
  component: SeriesComponent
},
{
  path: 'stories/:id',
  component: StoriesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
