/* global describe, it, document, expect */

import { appendTo, provide } from './fp';

describe('Functional methods', () => {
  it('can provide an element', () => {
    const el = document.createElement('p');
    el.innerText = 'Some text';
    expect(provide('p')('Some text')).toEqual(el);
  });

  it('can append child to parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    appendTo(parent, child);
    expect(parent.childNodes).toContain(child);
  });
});
