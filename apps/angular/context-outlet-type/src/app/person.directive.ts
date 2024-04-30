import { Directive } from '@angular/core';
import { PersonContext } from './person.component';

@Directive({
  selector: '[appPerson]',
  standalone: true,
})
export class PersonDirective {
  static ngTemplateContextGuard(
    dir: PersonDirective,
    ctx: unknown,
  ): ctx is PersonContext {
    return true;
  }
}
