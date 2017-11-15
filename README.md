# vsc-mixins

> Awesome vsc mixins for Polymer 2 elements.

[![Travis CI Status](https://travis-ci.org/valleweb/vsc-mixins.svg?branch=master)](https://travis-ci.org/valleweb/vsc-mixins)

## What is?

A class expression mixin is basically a function that operates as a class factory. You pass in a superclass, and the function generates a new class that extends the superclass with the mixin's methods.

[See polymer mixins docs.](https://www.polymer-project.org/2.0/docs/devguide/custom-elements#mixins)

or only...

Allows to share behaviors (like methods and properties) between different elements.

## Mixins available

- [vscButtonMixin](#vscButtonMixin) - All behaviors of a normal button plus the characteristics of a toggle button.

## Basic usage

### How to install:

Install using [Bower](http://bower.io/):

```sh
$ bower install vsc-mixins --save
```

### How to use:

Import the mixins:

```html
<link rel="import" href="bower_components/vsc-mixins/vscButtonMixins.html">
```

Using it:

```js
  class myButton extends vscButtonMixin(Polymer.Element) {
    static get is() { return 'my-button'; }
  }
```

### Full Example:

```html
<link rel="import" href="bower_components/polymer/polymer-element.html">
<link rel="import" href="bower_components/vsc-mixins/vscButtonMixins.html">

<dom-module id="my-button">

  <template>
    My button
  </template>

  <script>
    class myButton extends vscButtonMixin(Polymer.Element) {
      static get is() { return 'my-button'; }
    }
    window.customElements.define(myButton.is, myButton);
  </script>

</dom-module>
```

## vscButtonMixin

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

[View all methods, listeners, properties, etc...](vscButtonMixin.html)

## Tests

1 - Install local dependencies:

```sh
$ bower install
```

2 - Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] npm install -g web-component-tester
```

3 - Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/vsc-mixins/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/vsc-mixins/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/vsc-mixins/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/vsc-mixins/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
