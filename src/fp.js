/* global document */

/**
 * Appends an HTML DOM node to another
 * @param {Element} parent The parent HTML node to attach to
 * @param {Element} child The child HTML node to be attached
 * @example appendTo(document.body, htmlElement)
 */
export function appendTo(parent, child) {
  parent.appendChild(child);
}

/**
 * Creates and returns an HTML DOM node
 * @function
 * @param {string} type 'e.g: h1, h1, p, div, section, article, etc'
 * @param {string} value 'innerText for HTML element'
 * @example provide('h1')('Heading text')
 * @returns {Function}
 */
export function provide(type) {
  return (value) => {
    const el = document.createElement(type);
    el.innerText = value;
    return el;
  };
}

appendTo(document.body, provide('h1')('Heading text'));
