import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("primary-button")
export class PrimaryButton extends LitElement {
  static styles = css`
    .button-style {
      font-weight: bold;
      color: #5e3232;
      background-color: #86b5bc;
      border: 0px;
      padding: 1rem;
    }
  `;

  clickHandler() {
    console.log("hello");
  }

  render() {
    return html`
      <button @click=${this.clickHandler} class="button-style">
        <slot>button</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "primary-button": PrimaryButton;
  }
}
