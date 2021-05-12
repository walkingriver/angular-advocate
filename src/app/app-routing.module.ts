import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
      },
      { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
