import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Product[], searchVal: string): Product[] {
    if (searchVal.length > 1) {
      // return list.filter(function (val) {
      //   return val.title.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1;
      // });

      return list.filter((val) => val.title.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1);
    }
    return list;
  }

}
