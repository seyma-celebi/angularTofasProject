import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase(): '';
    //filterText var mı varsa küçük harfe çevir demek soru işaretinin anlamı
    return filterText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
   
  }

}
