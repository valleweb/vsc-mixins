# valle-mixinButton

> Awesome valle-mixinButton for Polymer 3 elements

[![npm](https://img.shields.io/npm/v/@valle/valle-mixinButton.svg)](https://www.npmjs.com/package/@valle/valle-mixinButton)

## What is?

A class expression mixin is basically a function that operates as a class factory. You pass in a superclass, and the function generates a new class that extends the superclass with the mixin's methods.

[See polymer mixins docs.](https://www.polymer-project.org/3.0/docs/devguide/custom-elements#mixins)

or only...

Allows to share behaviors (like methods and properties) between different elements.

## Basic usage

## How to install and use:

1 - Install the element using [Yarn](http://yarn.io/):

```sh
$ yarn add @valle/valle-mixinButton
```

2 -  Import the element:

```html
<script type="module" src="node_modules/@valle/valle-mixinButton/valle-mixinButton.js"></script>
```

or in your javascript file

```js
import { valleMixinButton } from '@valle/valle-mixinButton/valle-mixinButton.js';
```

3 - Start using it!

```js
class myButton extends valleMixinButton(PolymerElement) {
};
```

### Full Example:

```js
import { valleMixinButton } from '../../valle-mixinButton.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class myButton extends valleMixinButton(PolymerElement) {
  static get template() {
    return html`
      <template>
        <slot></slot>
      </template>
    `
  }
};

window.customElements.define('my-button', myButton);
```

## valle-mixinButton

All behaviors of a normal button plus the characteristics of a toggle button.

- Set all necessary aria attributes (ex: `role = "button"`), and controls all states changes (`aria-pressed` and `aria-disabled`).
- Control when the button should receive focus or not via `tabIndex`.
- Control `pointer-events` CSS state when necessary.
- Add keyboard (`SPACE` and `ENTER`) power for dispatch actions.

### Properties provided

Property    | Type      | Default | Description
:---        |:---       |:---     |:---
`disabled`  | *Boolean* | `false` | Allow disabled state
`toggle`    | *Boolean* | `false` | Allow toggle mode
`pressed`   | *Boolean* | `false` | Set the pressed state (toggled)

[View all methods, listeners, properties, etc...](valle-mixinButton.js)

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Verify if you have [node](http://nodejs.org/) and [yarn](http://yarn.io/) installed.

2 - Install [Polymer-CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add polymer-cli
```

3 - Install local dependencies:

```sh
$ yarn
```

4 - Start the development server:

```sh
$ yarn start
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-mixinButton/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-mixinButton/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-mixinButton/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-mixinButton/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
