# Xeno

Xeno is a lightweight library for creating user interfaces with easy syntax. It provides a simple button component with basic styling.

## Installation

Install the library using npm:

```bash
npm install xenopackage
```

## Usage

### Button Component

To use the button component, import it into your TypeScript or JavaScript code and create an instance:

```typescript
import { Button, mount } from 'xenopackage';

const myButton = Button({
    label: 'Click me!',
    onClick: () => alert('Button clicked!'),
});

mount(myButton, 'app');
```

The `Button` function takes an object with `label` and `onClick` properties. The `mount` function is used to append the component to a specified container.

### Styling

The button component comes with basic styling, including a background color, padding, and a hover effect. You can customize the styles by modifying the `styles.css` file in your project.

## Styles

Include the library styles in your HTML file:

```html
<link rel="stylesheet" href="node_modules/your-library-name/styles.css">
```

# LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE.MD) file for details.
```
