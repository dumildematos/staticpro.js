// src/staticpro.js
const ifDirective = require('./directives/if');

const staticpro = {
  directive: function (directives) {
    for (const key in directives) {
      if (directives.hasOwnProperty(key)) {
        const selector = key;
        const implementation = directives[key];

        const elements = document.querySelectorAll(`[${selector}]`);
        elements.forEach(element => {
          const value = element.getAttribute(`[${selector}]`);
          implementation(element, value);
        });
      }
    }
  },
};

staticpro.directive({
  'sp-if': ifDirective,
});

module.exports = staticpro;
