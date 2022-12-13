import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom_pipe',
  // Podemos indicuar si es puro o no con la propiedad pure:
})
export class CustomPipe implements PipeTransform {
  /**
   * args
   * - valor que introduce el usuario
   *
   *
   *
   * */
  transform(values: string[], args: string): string[] {
    if (!args && args?.length > 2) return values;
    let resutl: string[] = [];
    for (const value of values) {
      if (value.toLocaleLowerCase().indexOf(args.toLowerCase()) > -1)
        resutl = [...resutl, value];
    }
    return resutl;
  }
}
