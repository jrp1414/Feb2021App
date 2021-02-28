import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(list: any[], sortBy: string): Product[] {
    if (sortBy == '') {
      return list.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    } else if (sortBy == 'asc') {
      return list.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    } else if (sortBy == 'desc') {
      return list.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)).reverse();
    } else if (sortBy == 'id') {
      return list.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
  }

}
