export class DomHelper {
  constructor(document) {
    this.document = document;
  }

  appendTo(parent, child) {
    parent.appendChild(child);
  }
  
  createElement(type, value) {
    const el = this.document.createElement(type);
    el.innerText = value;
    return el;
  }
}

const domHelper = new DomHelper(document);
const el = domHelper.createElement('p', 'Paragraph text');
domHelper.appendTo(document.body, el);
