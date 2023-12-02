// src/directives/if.ts
import { DirectiveImplementation } from '../types';

export class IfDirective extends DirectiveImplementation<boolean> {
  execute(element: HTMLElement, value: boolean): void {
    if (!value) {
      element.style.display = 'none';
    } else {
      element.style.display = '';
    }
  }
}

export default IfDirective;
