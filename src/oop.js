/* global document */

export default class DomFactory {
  static appendTo(parent, child) {
    parent.appendChild(child);
  }

  static provide(type, value) {
    const el = document.createElement(type);
    el.innerText = value;
    return el;
  }
}

const el = DomFactory.provide('p', 'Paragraph text');
DomFactory.appendTo(document.body, el);
