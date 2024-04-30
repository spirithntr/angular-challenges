import { Directive, Input } from '@angular/core';

export interface ListTemplateContext<F> {
  $implicit: F; // we don't know the type in advance
  appList: F;
  index: number; // we know that index will always be of type number
}

@Directive({
  selector: 'ng-template[appList]',
  standalone: true,
})
export class ListTemplateDirective<T> {
  @Input('appList') list!: T[];

  // thx to this type definition we get checks in app component template
  static ngTemplateContextGuard<TContext>(
    dir: ListTemplateDirective<TContext>,
    ctx: unknown,
  ): ctx is ListTemplateContext<TContext> {
    return true;
  }
}
