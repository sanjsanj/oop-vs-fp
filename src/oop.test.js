import {DomHelper} from './oop';

describe('class Dom', () => {
  let domHelper;

  beforeEach(() => {
    domHelper = new DomHelper(document);
  });

  it('can create an element', () => {
    const el = document.createElement('p');
    el.innerText = 'Some text';
    expect(domHelper.createElement('p', 'Some text')).toEqual(el);
  });

  it('can append child to parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    domHelper.appendTo(parent, child);
    expect(parent.childNodes).toContain(child);
  });
});
