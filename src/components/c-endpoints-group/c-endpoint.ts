import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { globalStyle } from "../../swagger-ui";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { svgIcons } from "../c-svg-icons";

@customElement("c-endpoint")
export class MyElement extends LitElement {
  @property({ type: String })
  method!: "GET" | "POST" | "PUT" | "DELETE";

  @property({ type: String })
  path!: string;

  @property({ type: Boolean })
  isCollapsed = true;

  render() {
    return html`
      <span>
        <div>${unsafeHTML(svgIcons)}</div>
        <div
          class=${`opblock opblock-${this.method.toLowerCase()}`}
          id="operations-default-AppController_sendMessage"
        >
          <div
            class="opblock-summary opblock-summary-${this.method.toLocaleLowerCase()}"
          >
            <button
              aria-label="${this.method.toLocaleLowerCase()} &ZeroWidthSpace;${this
                .path}"
              aria-expanded="false"
              class="opblock-summary-control"
              @click=${() => (this.isCollapsed = !this.isCollapsed)}
            >
              <span class="opblock-summary-method">${this.method}</span>
              <span class="opblock-summary-path" data-path="${this.path}">
                <a class="nostyle" href="#/default/AppController_sendMessage">
                  <span> ${this.path} </span>
                </a>
              </span>
              <div class="opblock-summary-description"></div>
              <svg
                class="arrow"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <use
                  href="#large-arrow-down"
                  xlink:href="#large-arrow-down"
                ></use>
              </svg>
            </button>
            <button
              class="authorization__btn locked"
              aria-label="authorization button locked"
            >
              <svg width="20" height="20">
                <use href="#locked" xlink:href="#locked"></use>
              </svg>
            </button>
          </div>

          <div class="no-margin" ?hidden=${this.isCollapsed}>
            <div class="opblock-body">
              <div class="opblock-section">
                <div class="opblock-section-header">
                  <div class="tab-header">
                    <div class="tab-item active">
                      <h4 class="opblock-title">
                        <span>Parameters</span>
                      </h4>
                    </div>
                  </div>
                  <div class="try-out">
                    <button class="btn try-out__btn">Try it out</button>
                  </div>
                </div>
                <div class="parameters-container">
                  <div class="opblock-description-wrapper">
                    <p>No parameters</p>
                  </div>
                </div>
                <div class="opblock-section opblock-section-request-body">
                  <div class="opblock-section-header">
                    <h4 class="opblock-title parameter__name required">
                      Request body
                    </h4>
                    <label>
                      <div class="content-type-wrapper body-param-content-type">
                        <select
                          aria-label="Request content type"
                          class="content-type"
                        >
                          <option value="application/json">
                            application/json
                          </option>
                        </select>
                      </div>
                    </label>
                  </div>
                  <div class="opblock-description-wrapper">
                    <div>
                      <div class="model-example">
                        <ul class="tab" role="tablist">
                          <li class="tabitem active" role="presentation">
                            <button
                              aria-controls="c4Sb80I="
                              aria-selected="true"
                              class="tablinks"
                              data-name="example"
                              id="ROKUAEU="
                              role="tab"
                            >
                              Example Value
                            </button>
                          </li>
                          <li class="tabitem" role="presentation">
                            <button
                              aria-controls="uZv2MpE="
                              aria-selected="false"
                              class="tablinks"
                              data-name="model"
                              id="FLFAm3s="
                              role="tab"
                            >
                              Schema
                            </button>
                          </li>
                        </ul>
                        <div
                          aria-hidden="false"
                          aria-labelledby="ROKUAEU="
                          data-name="examplePanel"
                          id="c4Sb80I="
                          role="tabpanel"
                          tabindex="0"
                        >
                          <div class="highlight-code">
                            <pre
                              class="body-param__example microlight"
                              style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: white;"
                            ></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="execute-wrapper"></div>
              <div class="responses-wrapper">
                <div class="opblock-section-header">
                  <h4>Responses</h4>
                </div>
                <div class="responses-inner">
                  <table
                    aria-live="polite"
                    class="responses-table"
                    id="post_api_responses"
                    role="region"
                  >
                    <thead>
                      <tr class="responses-header">
                        <td class="col_header response-col_status">Code</td>
                        <td class="col_header response-col_description">
                          Description
                        </td>
                        <td class="col col_header response-col_links">Links</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="response " data-code="200">
                        <td class="response-col_status">200</td>
                        <td class="response-col_description">
                          <div class="response-col_description__inner">
                            <!-- react-empty: 3581 -->
                          </div>
                          <section class="response-controls">
                            <div
                              class="response-control-media-type response-control-media-type--accept-controller"
                            >
                              <small class="response-control-media-type__title"
                                >Media type</small
                              >
                              <div class="content-type-wrapper ">
                                <select
                                  aria-label="Media Type"
                                  class="content-type"
                                >
                                  <option value="application/json">
                                    application/json
                                  </option>
                                </select>
                              </div>
                              <small
                                class="response-control-media-type__accept-message"
                                >Controls
                                <code>Accept</code>
                                header.</small
                              >
                            </div>
                          </section>
                          <div class="model-example">
                            <ul class="tab" role="tablist">
                              <li class="tabitem active" role="presentation">
                                <button
                                  aria-controls="lABe5us="
                                  aria-selected="true"
                                  class="tablinks"
                                  data-name="example"
                                  id="wXLbZqw="
                                  role="tab"
                                >
                                  Example Value
                                </button>
                              </li>
                              <li class="tabitem" role="presentation">
                                <button
                                  aria-controls="ArABzrc="
                                  aria-selected="false"
                                  class="tablinks"
                                  data-name="model"
                                  id="YXOWeH0="
                                  role="tab"
                                >
                                  Schema
                                </button>
                              </li>
                            </ul>
                            <div
                              aria-hidden="false"
                              aria-labelledby="wXLbZqw="
                              data-name="examplePanel"
                              id="lABe5us="
                              role="tabpanel"
                              tabindex="0"
                            >
                              <div>
                                <div class="highlight-code">
                                  <pre
                                    class="example microlight"
                                    style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: white;"
                                  ></pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="response-col_links">
                          <i>No links</i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    `;
  }

  static get styles() {
    return [globalStyle, css``];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-endpoint": MyElement;
  }
}
