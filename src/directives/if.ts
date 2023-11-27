// src/directives/if.ts
import { DirectiveImplementation } from '../types';

const ifDirective: DirectiveImplementation = function (element, value) {
  if (!value) {
    // Hide the element (set display to 'none')
    element.style.display = 'none';
  } else {
    // Show the element
    element.style.display = '';
  }
};

export default ifDirective;
