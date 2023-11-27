// src/staticpro.ts
import ifDirective from './directives/if';
import { DirectiveImplementation, DirectiveObject } from './types';

interface Staticpro {
  originalDOM: Document;
  directive: (directives: DirectiveObject) => void;
  updateOriginalDOM: () => void;
  queryOriginalDOM: (selector: string) => NodeListOf<Element>;
}

const staticpro: Staticpro = {
  originalDOM: document.cloneNode(true) as Document,

  directive: function (directives: DirectiveObject) {
    document.addEventListener('DOMContentLoaded', function () {

      // Check if the 'Static' attribute is present on the body tag
      
      if (document.body.hasAttribute('Static')) {
        staticpro.originalDOM = document.cloneNode(true) as Document;
  
        for (const key in directives) {
          if (directives.hasOwnProperty(key)) {
            const selector = key;
            const implementation = directives[key] as DirectiveImplementation;
  
            const elements = staticpro.queryOriginalDOM(`[${selector}]`);
            elements.forEach(element => {
              const value = element.getAttribute(selector);
  
              // Explicitly convert the attribute value to a boolean
              const booleanValue = value === 'true';
  
              implementation(element as HTMLElement, booleanValue);
            });
          }
        }
  
        // Update the actual DOM with the modified staticpro.originalDOM
        document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));
  
        // Optionally, you can call staticpro.updateOriginalDOM() if you still want to keep a clone in memory
        // staticpro.updateOriginalDOM();
      }
    });
  },

  updateOriginalDOM: function () {
    // Update the original DOM to reflect the changes
    staticpro.originalDOM = document.cloneNode(true) as Document;
  },

  // Helper method to query elements in the original DOM using the attribute value
  queryOriginalDOM: function (selector: string): NodeListOf<Element> {
    return staticpro.originalDOM.querySelectorAll(selector);
  },
};

// Include the "if" directive as part of the acceptable directives
staticpro.directive({
  'If': ifDirective,
});

export default staticpro;
