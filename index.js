
// static.js

class Static {
  constructor() {
    this.directives = {};
    this.bindings = {};
    this.pipes = {};
  }

  // Register Custom Directives
  registerDirective(name, handler) {
    this.directives[name] = handler;
  }

  // Bind Data
  bindData(element, property, data) {
    this.bindings[element] = { property, data };
    this.updateBindings();
  }

  // Update Bindings
  updateBindings() {
    Object.entries(this.bindings).forEach(([element, { property, data }]) => {
      const directive = this.directives[property];
      if (directive) {
        directive(element, data);
      }
    });
  }

  // Register Pipes
  registerPipe(name, transformFn) {
    this.pipes[name] = transformFn;
  }

  // Apply Pipe
  applyPipe(value, pipeName) {
    const pipe = this.pipes[pipeName];
    return pipe ? pipe(value) : value;
  }

  // HTTP Requests
  async httpRequest(url, method = 'GET', data = null) {
    // Implement your HTTP request logic here
    // For simplicity, this example uses the fetch API
    const response = await fetch(url, { method, body: data });
    return response.json();
  }
}

// Example Usage
const staticApp = new Static();

// Register Custom Directive
staticApp.registerDirective('text', (element, data) => {
  element.innerText = data;
});

// Register Pipe
staticApp.registerPipe('uppercase', (value) => value.toUpperCase());

// Example Binding
const titleElement = document.getElementById('title');
staticApp.bindData(titleElement, 'text', 'Hello, Static.js!');

// Example HTTP Request
staticApp.httpRequest('https://api.example.com/data')
  .then((data) => console.log('Received data:', data))
  .catch((error) => console.error('Error:', error));
