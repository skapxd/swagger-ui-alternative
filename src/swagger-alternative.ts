import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { globalStyle } from "./swagger-ui";

import "./components/c-title";
import "./components/c-auth";
import "./components/c-endpoints-group";
import "./components/c-schema";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("swagger-alternative")
export class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <c-title></c-title>
        <c-auth></c-auth>
        <c-endpoints-group></c-endpoints-group>
        <c-schema></c-schema>
      </div>
    `;
  }

  static get styles() {
    return [globalStyle];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "swagger-alternative": MyElement;
  }
}
