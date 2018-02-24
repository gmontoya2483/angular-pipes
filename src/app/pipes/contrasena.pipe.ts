import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): string {
    let salida = "";
    if (activar){
      salida = "*******";
      //for ( let i=0; i< value.length; i++){
      //salida += "*";
      //}

    }else{
      salida = value
    }
    return salida;
  }

}
