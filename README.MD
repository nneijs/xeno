# Xeno Library

Welcome to Xeno, a lightweight and intuitive web library for building user interfaces with ease. Whether you're a seasoned developer or just starting out, Xeno empowers you to create beautiful and functional UIs with a simple and straightforward syntax.

## Features

- **Easy Syntax**: Get rid of the complexity with our straightforward syntax. Create UI elements effortlessly without sacrificing customization.

- **Responsive Design**: Build responsive and mobile-friendly interfaces that adapt seamlessly to different screen sizes and devices.

- **Component Library**: Explore a rich set of pre-built components like buttons, forms, modals, and more. Boost your productivity by leveraging our extensive component library.

- **Custom Styling**: Tailor the look and feel of your UI with customizable styling options. Easily match your application's design language without wrestling with intricate CSS.

- **Extensible and Lightweight**: Keep your project light and nimble. Xeno is designed to be minimalistic and highly extensible, allowing you to add only the features you need.

## Getting Started

### Installation

```bash
npm install xenopackage
```

### Usage

```javascript
import { Button, Input, Modal } from 'xenopackage';

// Create a button
const myButton = new Button('Click me');

// Create an input field
const myInput = new Input('text', 'Enter text');

// Create a modal
const myModal = new Modal('My Modal', 'This is the content of the modal');

// Append elements to the DOM
myButton.appendTo(document.body);
myInput.appendTo(document.body);
myModal.appendTo(document.body);
```

## Contributing

We welcome contributions from the community. If you find a bug, have a feature request, or want to contribute code, please check out our [contribution guidelines](CONTRIBUTING.md).


Happy coding with Xeno! 🚀