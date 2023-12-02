// src/directives/render.ts
import { DirectiveImplementation } from '../types';

export class RenderDirective extends DirectiveImplementation<string> {
  execute(element: HTMLElement, value: string): void {
    console.log(value)
    element.innerHTML = value;
  }
}

export default RenderDirective;
