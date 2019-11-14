import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

/** Constants used to fill up our data base. */
export interface PeriodicElement {
  name: string;
  position: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Indian' },
  { position: 2, name: 'Italian'  },
  { position: 3, name: 'South Indian'},
  { position: 4, name: 'Chinese' },
  { position: 5, name: 'American'},
  { position: 6, name: 'Mexican' },
  { position: 7, name: 'Moroccan' },
  { position: 8, name: 'Barbecue' },
  { position: 9, name: 'Mediterreanean' },
  { position: 10, name: 'Cuban' },
];
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
/**
 * @author:shubahngi
 */
export class RecipelistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  positionFilter = new FormControl();
  nameFilter = new FormControl();
  globalFilter = '';

  filteredValues = {
    position: '', name: '', weight: '',
    symbol: ''
  };
  ngOnInit() {
//filtering according to position
    this.positionFilter.valueChanges.subscribe((positionFilterValue) => {
      this.filteredValues['position'] = positionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });
//filtering according to name
    this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['name'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
//calling the custom search function
    this.dataSource.filterPredicate = this.customFilterPredicate();

  }
//global filter
  applyFilter(filter) {
    this.globalFilter = filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  
/**
 * for local searching
 * @returns: myFilterPredicate
 */
  customFilterPredicate() {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {
      var globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.name.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      let searchString = JSON.parse(filter);
      return data.position.toString().trim().indexOf(searchString.position) !== -1 &&
        data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }
  
}

/** Builds and returns a new User. */

