import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { TableComponent } from './app/table/table.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'table', title: 'Table', component: TableComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
