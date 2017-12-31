const appendTo = parent => child => {
  parent.appendChild(child);
};

const createElement = type => value => {
  const el = document.createElement(type);
  el.innerText = value;
  return el;
};

appendTo(document.body)(createElement('h1')('Heading text'));