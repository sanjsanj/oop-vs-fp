import Dom from './oop';

describe('class Dom', () => {
  let dom;

  beforeEach(() => {
    dom = new Dom(document);
  });

  it('can create an element', () => {
    const el = document.createElement('p');
    el.innerHTML = 'Some text';
    expect(dom.createElement('p', 'Some text')).toEqual(el);
  });

  it('can append child to parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('p');
    child.innerHTML = 'p text';
    const expected = parent.appendChild(child);
    Dom.appendTo(parent, child);
    // expect(parent).toContain(child);
  });
});
