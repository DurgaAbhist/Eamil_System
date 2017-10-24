import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
   //   if (value.name === 0 || filterString === '') {
   //      return value;
   //   }
     const resultArray = [];
     for(let item of value) {
        if(item[propName] === filterString) {
           resultArray.push(item);
        }
     }
     return resultArray;
  }

}
