import {Component, ViewChild} from '@angular/core';
import { ENTRIES, Entry } from '../../table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'  

//import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ 
    MatPaginator,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  entries = ENTRIES;
  pageSize = 10;

  displayedColumns = ['createdOn', 'updatedOn', 'title'];
  dataSource: MatTableDataSource<Entry>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.entries);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'createdOn': return new Date(item.createdOn).getTime();
        case 'updatedOn': return new Date(item.updatedOn).getTime();
        default: return item[property as keyof Entry] as string;
      }
    }
  }
  

  
  //p: number = 1;
  //collection: any[] = ENTRIES;  
}

 
