import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { globalStyle } from "../swagger-ui";

@customElement("c-title")
export class MyElement extends LitElement {
  render() {
    return html`
      <div class="information-container wrapper">
        <section class="block col-12">
          <div>
            <div class="info">
              <hgroup class="main">
                <h2 class="title">
                  NestJS example
                  <span>
                    <small>
                      <pre class="version"> 1.0 </pre>
                    </small>
                    <small class="version-stamp">
                      <pre class="version">OAS3</pre>
                    </small>
                  </span>
                </h2>
                <a
                  target="_blank"
                  href="swagger.json"
                  rel="noopener noreferrer"
                  class="link"
                >
                  <span class="url"> swagger.json</span>
                </a>
              </hgroup>
              <div class="description">
                <div class="renderedMarkdown">
                  <p>The NestJS API description</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  static get styles() {
    // this is the important part, this array includes our resetted styles and this components styles
    return [globalStyle, css``];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-title": MyElement;
  }
}
