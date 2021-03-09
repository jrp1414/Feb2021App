import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchVal: string, filterCategories: string[], ...filterColumns: string[]): Product[] {
    if (searchVal.length > 1) {
      let tempList: any[] = [];
      for (let column of filterColumns) {
        var filtered = list.filter((obj) => obj[column].toLowerCase().indexOf(searchVal.toLowerCase()) != -1);
        // Array.prototype.push.apply(tempList, filtered);
        tempList = [...tempList, ...filtered];
      }

      if (filterCategories.length > 0) {
        let tempCategoryList: any[] = [];
        for (let category of filterCategories) {
          var filtered = tempList.filter((obj) => { return obj.type.toLowerCase() == category; });
          tempCategoryList = [...tempCategoryList, ...filtered];
        }
        return tempCategoryList;
      }
      return tempList;
    } else if (filterCategories.length > 0) {
      let tempList: any[] = [];
      for (let category of filterCategories) {
        var filtered = tempList.filter((obj) => { return obj.type.toLowerCase() == category; });
        tempList = [...tempList, ...filtered];
      }
      return tempList;
    }
    return list;
  }

}
