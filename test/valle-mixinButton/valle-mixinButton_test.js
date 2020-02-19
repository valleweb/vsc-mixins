import { pressSpace, pressEnter } from '@polymer/iron-test-helpers/mock-interactions';

suite('Basic', () => {

  let b1, b2, b3;

  setup(() => {
    b1 = fixture('default');
    b2 = fixture('disabled');
    b3 = fixture('toggle');
  });

  test('Should render a default button', () => {

    const button = b1;

    // Slot
    expect(button.innerHTML).to.be.equal('default button');

    // Button
    assert.isTrue(button.hasAttribute('role'));
    expect(button.getAttribute('role')).to.be.equal('button');

    // Keyboard focus
    assert.isTrue(button.hasAttribute('tabindex'));
    expect(button.getAttribute('tabindex')).to.be.equal('0');

    // No Toggle
    assert.isFalse(button.hasAttribute('toggle'));
    assert.isFalse(button.hasAttribute('aria-pressed'));
    assert.isFalse(button.hasAttribute('pressed'));

    // No Disabled
    assert.isFalse(button.hasAttribute('disabled'));
    assert.isFalse(button.hasAttribute('aria-disabled'));

    // Pointer Events
    const pointerEvents = window.getComputedStyle(button, null).getPropertyValue('pointer-events')
    expect(pointerEvents).to.be.equal('auto');

  });

  test('Can be triggered with space', (done) => {

    const button = b1;

    button.addEventListener('click', () => {
      done()
    });

    pressSpace(button);

  });

  test('Can be triggered with enter', (done) => {

    const button = b1;

    button.addEventListener('click', () => {
      done();
    });

    pressEnter(button);

  });

  test('Should render a disabled button', () => {

    const button = b2;

    // No Keyboard focus
    assert.isFalse(button.hasAttribute('tabindex'));

    // Disabled
    assert.isTrue(button.hasAttribute('disabled'));
    assert.isTrue(button.hasAttribute('aria-disabled'));
    expect(button.getAttribute('aria-disabled')).to.be.equal('true');

    // Pointer Events
    const pointerEvents = window.getComputedStyle(button, null).getPropertyValue('pointer-events')
    expect(pointerEvents).to.be.equal('none');

  });

  test('Should disable the button using the javascript API', () => {

    const button = b1;

    // Enabled
    assert.isFalse(button.hasAttribute('disabled'));

    button.disabled = true;

    // Disabled
    assert.isTrue(button.hasAttribute('disabled'));

  });

  test('Should render a toggle button', () => {

    const button = b3;

    // Toggle (No pressed)
    assert.isTrue(button.hasAttribute('toggle'));
    assert.isTrue(button.hasAttribute('aria-pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('false');
    assert.isFalse(button.hasAttribute('pressed'));

  });

  test('Should toggle press when click', () => {

    const button = b3;

    // No Pressed
    assert.isFalse(button.pressed);
    assert.isFalse(button.hasAttribute('pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('false');

    button.click();

    // Pressed
    assert.isTrue(button.pressed);
    assert.isTrue(button.hasAttribute('pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('true');

    button.click();

    // No Pressed
    assert.isFalse(button.pressed);
    assert.isFalse(button.hasAttribute('pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('false');

  });

  test('Should press the button using the javascript API', () => {

    const button = b3;

    // No Pressed
    assert.isFalse(button.hasAttribute('pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('false');

    button.pressed = true;

    // Pressed
    assert.isTrue(button.hasAttribute('pressed'));
    expect(button.getAttribute('aria-pressed')).to.be.equal('true');

  });

});
