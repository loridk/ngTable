import { Component } from '@angular/core';
import { ENTRIES } from '../../table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  entries = ENTRIES;
}

 
