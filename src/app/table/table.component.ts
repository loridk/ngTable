import { Component } from '@angular/core';
import { ENTRIES } from '../../table';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  entries = ENTRIES;
  p: number = 1;
  collection: any[] = ENTRIES;  
}

 
