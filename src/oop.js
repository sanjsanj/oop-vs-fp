export class DomFactory {
  appendTo(parent, child) {
    parent.appendChild(child);
  }
  
  provide(type, value) {
    const el = document.createElement(type);
    el.innerText = value;
    return el;
  }
}

const domFactory = new DomFactory();
const el = domFactory.provide('p', 'Paragraph text');
domFactory.appendTo(document.body, el);
