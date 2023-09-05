import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomepageComponent } from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movies', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
