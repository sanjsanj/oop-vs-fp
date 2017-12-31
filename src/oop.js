class Dom {
  createElement(type, value) {
    const el = document.createElement(type);
    el.innerText = value;
    return el;
  }

  appendTo(parent, child) {
    parent.appendChild(child);
  }
}

const dom = new Dom()
const el = dom.createElement('p', 'some text')
dom.appendTo(document.body, el)
