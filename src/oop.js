/* global document */

/**
 * A Factory to carry out common DOM functions
 * @name DomFactory
 * @constructor
 */
export default class DomFactory {
  /**
   * Appends an HTML DOM node to another
   * @param {Element} parent The parent HTML node to attach to
   * @param {Element} child The child HTML node to be attached
   */
  static appendTo(parent, child) {
    parent.appendChild(child);
  }

  /**
   * Creates and returns an HTML DOM node
   * @param {string} type 'e.g: h1, h1, p, div, section, article, etc'
   * @param {string} value 'innerText for HTML element'
   * @return {Element} HTML DOM node
   */
  static provide(type, value) {
    const el = document.createElement(type);
    el.innerText = value;
    return el;
  }
}

const el = DomFactory.provide('p', 'Paragraph text');
DomFactory.appendTo(document.body, el);
