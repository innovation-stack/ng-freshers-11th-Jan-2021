import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, limit = 10) {
    if (!value) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }
}
