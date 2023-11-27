# staticpro.js

`staticpro.js` is a powerful library designed to bring the flexibility and ease of use found in SPA (Single Page Application) frameworks such as Angular, React, and Vue to the development of static web pages. It provides a simple and intuitive starting point for aspiring front-end developers, allowing them to harness the power of directives, binds, and HTTP calls in their static applications.

## Features

### Directives

Directives in `staticpro.js` are a way to pass dynamic values to static elements. They can be created in the following ways:

- **Create Customized Directives:** Define your own custom directives tailored to your application's needs.
- **Transform HTML Attributes into Directives:** Easily transform HTML attributes into dynamic directives for enhanced functionality.

### `[If]` Directive

The `[If]` directive allows you to conditionally show or hide elements in your static pages. Surround directives in brackets when used:

```html
<p If="true">This paragraph will be shown.</p>
<p If="false">This paragraph will be hidden.</p>
