import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'camel2space'})
export class Camel2SpacePipe implements PipeTransform {
  transform(label: string): string {
    return label.replace(/([A-Z])/g, ' $1')
  }
}
