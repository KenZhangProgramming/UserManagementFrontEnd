import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {
  filter(datasource: any[], filterProperty: string, filterData: string) {
    if (datasource && filterProperty && filterData) {
      filterData = filterData.toUpperCase();
      let filtered = datasource.filter(item => {
        let match = false;
        if (item.firstName.includes(filterData)) {
          match = true;
        }
        return match;
      });
      return filtered;
    }
    else {
      return datasource;
    }
  }
}
