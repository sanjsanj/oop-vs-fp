import {DomFactory} from './oop';

describe('class Dom', () => {
  let domFactory;

  beforeEach(() => {
    domFactory = new DomFactory();
  });

  it('can create an element', () => {
    const el = document.createElement('p');
    el.innerText = 'Some text';
    expect(domFactory.provide('p', 'Some text')).toEqual(el);
  });

  it('can append child to parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    domFactory.appendTo(parent, child);
    expect(parent.childNodes).toContain(child);
  });
});
