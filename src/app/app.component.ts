import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,TableComponent,RouterModule,NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngTable';
}
