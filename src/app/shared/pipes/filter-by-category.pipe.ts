import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Pipe({
  name: 'filterbycategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(list: any[], filterColumns: string[]): Product[] {
    if (filterColumns.length > 0) {
      let tempList: any[] = [];
      for (let column of filterColumns) {
        var filtered = list.filter((obj) => obj.type.toLowerCase() == column);
        tempList = [...tempList, ...filtered];
      }
      return tempList;
    }
    return list;
  }
}
