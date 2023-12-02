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

## Data Binding

To use data binding, call the `app` method and pass a function that takes a single argument, `$var`. This object allows you to define properties that will be dynamically bound to your HTML elements.

### Data Binding Example
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

  <script>
    staticpro.app(($var) => {
      // Define properties for data binding
      $var.name = "John"; 
      $var.age = 21;
    });
  </script>

  <p If="false">hide</p>
  <p If="true">show</p>

  <p>{name} Doe</p> <!-- John Doe-->
  <p>{age}</p> <!-- 21-->

</body>
</html>
```

# Contributing to StaticPro.js

Thank you for considering contributing to StaticPro.js! Your contributions help improve and grow the project. Before you start, please take a moment to read the following guidelines.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Code Contributions](#code-contributions)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Commit Guidelines](#commit-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)
- [License](#license)

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please open an issue with a detailed description of the problem. Be sure to include information about your environment.

### Suggesting Enhancements

Have an idea to make StaticPro.js better? Great! Open an issue and describe your enhancement. We welcome your input!

### Code Contributions

We welcome code contributions! To contribute code:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the tests pass.
4. Open a pull request.

## Getting Started

To get started with development, follow these steps:

1. Clone the repository: `git clone https://github.com/dumildematos/staticpro.js`
2. Install dependencies: `npm install`

## Development Setup

No specific setup steps are needed for development.

## Commit Guidelines

Follow the [conventional commits](https://www.conventionalcommits.org/) specification for your commit messages.

## Code Style

Maintain the existing code style. If in doubt, refer to the style guide or the existing codebase.

## Testing

Ensure that your changes pass the existing tests. If you add new functionality, include relevant tests.

## Documentation

Update the documentation to reflect your changes. Documentation is just as important as code!

## Community

Connect with the StaticPro.js community:
- Chat on [Gitter](#)
- Follow us on [Twitter](#)
- Join the [Forum](#)

## License

By contributing, you agree that your contributions will be licensed under the [LICENSE](LICENSE) file of this project.

Happy contributing!
