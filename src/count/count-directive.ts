//https://js2brain.com/blog/building-reactive-apps-with-rxjs-and-lit

import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { observe } from "./ObserveDirective";
import { count$ } from "./count";

@customElement("count-directive")
export class CountDirective extends LitElement {
  render() {
    return observe(count$);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "count-directive": CountDirective;
  }
}
