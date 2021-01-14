import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno',
})
export class YesNoPipe implements PipeTransform {
  transform(value: boolean, trueEquivalent: string, falseEquivalent: string) {
    return value === true ? trueEquivalent : falseEquivalent;
  }
}
