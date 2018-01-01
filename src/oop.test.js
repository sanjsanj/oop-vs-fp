/* global describe, it, document, expect */

import DomFactory from './oop';

describe('DomFactory class', () => {
  it('can provide an element', () => {
    const domFactory = new DomFactory(document);
    const el = document.createElement('p');
    el.innerText = 'Some text';
    expect(domFactory.provide('p', 'Some text')).toEqual(el);
  });

  it('can append child to parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    DomFactory.appendTo(parent, child);
    expect(parent.childNodes).toContain(child);
  });
});
