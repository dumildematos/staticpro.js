// src/staticpro.ts
import { IfDirective } from './directives/if';
import { RenderDirective } from './directives/render';
import { DirectiveImplementation, DirectiveObject } from './types';

// Declare the 'staticproVariables' property on the Window interface
declare global {
  interface Window {
    staticpro: Staticpro;
    staticproVariables?: Record<string, any>;
  }
}

interface Staticpro {
  originalDOM: Document;
  directive: (directives: DirectiveObject) => void;
  updateOriginalDOM: () => void;
  queryOriginalDOM: (selector: string) => NodeListOf<Element>;
  app: (propFn: ($var: any) => void) => void;
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
            const DirectiveClass = directives[key];
            const implementation = new DirectiveClass();

            const elements = staticpro.queryOriginalDOM(`[${selector}]`);
            elements.forEach(element => {
              const value = element.getAttribute(selector);

              // Explicitly convert the attribute value to a boolean
              const booleanValue = value === 'true';

              implementation.execute(element as HTMLElement, booleanValue);
            });
          }
        }

        // Update the actual DOM with the modified staticpro.originalDOM
        document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));
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

  app: (propFn: ($var: any) => void) => {
    document.addEventListener('DOMContentLoaded', function () {
      if (document.body.hasAttribute('Static')) {

        const callbackVariables: Record<string, any> = {};

        // Override the 'window' object temporarily to capture variable declarations
        const originalWindow = window;
        const temporaryWindow = Object.create(originalWindow, {
          staticproVariables: { value: callbackVariables, writable: true },
        });

        // Execute the provided callback within the temporary window context
        propFn(callbackVariables);

        // Access properties of the $var declared inside the .app() callback

        const elements = staticpro.originalDOM.body.querySelectorAll('*:not(script):not(style)'); // Exclude script and style elements
        const regex = /\{(.+?)\}/;

        elements.forEach((element: any) => {
            // Check if innerText matches the format { some }
            const match = regex.exec(element.innerText);
            if (match) {
              // Extract the content inside the curly braces
              const contentInsideBraces = match[1].trim();
              const variableValue = resolveVariable(contentInsideBraces, callbackVariables);
          
              element.innerHTML = element.innerText.replace(/{([^}]+)}/g, (_: any, contentInsideBraces: any) => {
                return variableValue;
              });
              console.log(element);

            }
          });

        // Restore the original 'window' object
        window.staticproVariables = window.staticproVariables || {};
        Object.assign(window.staticproVariables, callbackVariables);

        // Update the actual DOM with the modified staticpro.originalDOM
        document.documentElement.replaceWith(staticpro.originalDOM.documentElement.cloneNode(true));
      }
    });
  },
};

// Include the "If" and "Render" directives as part of the acceptable directives
staticpro.directive({
  'If': IfDirective,
  'Render': RenderDirective,
});

// Assign the 'staticpro' object to the global window object
window.staticpro = staticpro;

export default staticpro;

// Function to resolve variables without using eval
function resolveVariable(variableName: string, variables: Record<string, any>): any {
  const parts = variableName.split('.');
  let value = variables;

  for (const part of parts) {
    if (value && part in value) {
      value = value[part];
    } else {
      return undefined;
    }
  }

  return value;
}
