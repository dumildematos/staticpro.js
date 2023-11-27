# StaticPro.js

StaticPro.js is a lightweight JavaScript library designed to bring the flexibility and ease of use found in SPA (Single Page Application) frameworks such as Angular, React, and Vue to the development of static web pages. It provides a simple and intuitive starting point for front-end developers, allowing them to harness the power of directives, binds, and HTTP calls in their static applications.

## Features

- **Custom Directives:** Create customized directives tailored to your application's needs.
  
- **Attribute-Based Directives:** Easily transform HTML attributes into dynamic directives for enhanced functionality.

- **If Directive:** Use the `If` directive to conditionally show or hide elements based on a boolean attribute.

## Getting Started

1. **Include the Library:**
   - Download the `bundle.js` file from the latest release.

   - Include the following script tag in your HTML file:

     ```html
     <script src="path/to/bundle.js"></script>
     ```
2. **Initialize the Library:**
    - Add the `Static` attribute to the `<body>` tag to indicate that you want to use Staticpro.js:

    ```html
    <body Static>
        <!-- Your static content goes here -->
    </body>
    ```


2. **Use Directives in HTML:**
   - Apply directives to your HTML elements using the specified syntax.

     ```html
     <p If="true">This will be displayed</p>
     <p If="false">This will be hidden</p>
     ```

4. **Run your Application:**
   - Ensure your application is running, and the directives will be applied dynamically.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StaticPro.js Example</title>
  <script src="path/to/bundle.js"></script>
</head>
<body Static>

  <h1>Welcome to StaticPro.js</h1>

  <p If="true">This element will be displayed.</p>
  <p If="false">This element will be hidden.</p>

</body>
</html>
