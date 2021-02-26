import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchVal: string, ...filterColumns: string[]): Product[] {
    if (searchVal.length > 1) {

      // return list.filter((val) => val.title.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1);

      let tempList: any[] = [];
      for (let column of filterColumns) {
        var filtered = list.filter((obj) => obj[column].toLowerCase().indexOf(searchVal.toLowerCase()) != -1);
        // Array.prototype.push.apply(tempList, filtered);
        tempList = [...tempList, ...filtered];

        //[1,2,3]
        //[2,3]
        //[[1,2,3],[2,3]]
        //[1,2,3,2,3]
      }
      return tempList;
    }
    return list;
  }

}
