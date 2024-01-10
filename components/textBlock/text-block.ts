import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("text-block")
export class TextBlock extends LitElement {
  static styles = css`
    .text-style {
      font-weight: bold;
      color: red;
    }
  `;

  render() {
    return html` <p class="text-style"><slot>fallback text</slot></p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "text-block": TextBlock;
  }
}
