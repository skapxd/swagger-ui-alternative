import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { globalStyle } from "../../swagger-ui";
import "./c-endpoint";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { svgIcons } from "../c-svg-icons";

@customElement("c-endpoints-group")
export class MyElement extends LitElement {
  render() {
    // const default = html`

    return html`
      <div>${unsafeHTML(svgIcons)}</div>

      <section class="block col-12 block-desktop col-12-desktop">
        <h3
          class="opblock-tag no-desc"
          id="operations-tag-default"
          data-tag="default"
          data-is-open="true"
        >
          <a class="nostyle" href="#/default">
            <span>default</span>
          </a>
          <small> </small>
          <button
            aria-expanded="true"
            class="expand-operation"
            title="Collapse operation"
          >
            <svg
              class="arrow"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <use href="#large-arrow-up" xlink:href="#large-arrow-up"></use>
            </svg>
          </button>
        </h3>

        <c-endpoint method="POST" path="/api"></c-endpoint>
      </section>
    `;
    return html` <div class="wrapper">
      <section class="block col-12 block-desktop col-12-desktop">
        <div>
          <span></span>
            <div class="opblock-tag-section is-open">
              <h3
                class="opblock-tag no-desc"
                id="operations-tag-default"
                data-tag="default"
                data-is-open="true"
              >
                <a class="nostyle" href="#/default">
                  <span>default</span>
                </a>
                <small> </small>
                <div></div>
                <button
                  aria-expanded="true"
                  class="expand-operation"
                  title="Collapse operation"
                >
                  <svg
                    class="arrow"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use
                      href="#large-arrow-up"
                      xlink:href="#large-arrow-up"
                    ></use>
                  </svg>
                </button>
              </h3>
              <div class="no-margin">
                <!-- react-text: 85 -->
                <!-- /react-text -->
                <div class="operation-tag-content">
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-AppController_sendMessage"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span class="opblock-summary-path" data-path="/api">
                            <a
                              class="nostyle"
                              href="#/default/AppController_sendMessage"
                            >
                              <span>
                                <!-- react-text: 95 -->/api<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 102 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-AppController_getAllMessages"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span class="opblock-summary-path" data-path="/api">
                            <a
                              class="nostyle"
                              href="#/default/AppController_getAllMessages"
                            >
                              <span>
                                <!-- react-text: 112 -->/api<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 119 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-AppController_getRoles"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/roles"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/roles"
                          >
                            <a
                              class="nostyle"
                              href="#/default/AppController_getRoles"
                            >
                              <span>
                                <!-- react-text: 129 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 131 -->/roles<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 138 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-AppController_swagger"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/sg"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sg"
                          >
                            <a
                              class="nostyle"
                              href="#/default/AppController_swagger"
                            >
                              <span>
                                <!-- react-text: 148 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 150 -->/sg<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 157 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-AppController_sse"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/sse2"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sse2"
                          >
                            <a
                              class="nostyle"
                              href="#/default/AppController_sse"
                            >
                              <span>
                                <!-- react-text: 167 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 169 -->/sse2<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 176 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-SseController_render"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/sse"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sse"
                          >
                            <a
                              class="nostyle"
                              href="#/default/SseController_render"
                            >
                              <span>
                                <!-- react-text: 186 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 188 -->/sse<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 195 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-SseController_btn"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/sse"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sse"
                          >
                            <a
                              class="nostyle"
                              href="#/default/SseController_btn"
                            >
                              <span>
                                <!-- react-text: 205 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 207 -->/sse<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 214 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-SseController_cron"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/sse&ZeroWidthSpace;/all"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sse/all"
                          >
                            <a
                              class="nostyle"
                              href="#/default/SseController_cron"
                            >
                              <span>
                                <!-- react-text: 224 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 226 -->/sse<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 228 -->/all<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 235 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-SseController_sse"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/sse&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/sse/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/SseController_sse"
                            >
                              <span>
                                <!-- react-text: 245 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 247 -->/sse<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 249 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 256 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-WorkerController_addCounter"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/worker"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/worker"
                          >
                            <a
                              class="nostyle"
                              href="#/default/WorkerController_addCounter"
                            >
                              <span>
                                <!-- react-text: 266 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 268 -->/worker<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 275 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-AudioController_transcode"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/audio&ZeroWidthSpace;/transcode"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/audio/transcode"
                          >
                            <a
                              class="nostyle"
                              href="#/default/AudioController_transcode"
                            >
                              <span>
                                <!-- react-text: 285 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 287 -->/audio<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 289 -->/transcode<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 296 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-AudioController_xlsx"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/audio&ZeroWidthSpace;/upload-single-file"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/audio/upload-single-file"
                          >
                            <a
                              class="nostyle"
                              href="#/default/AudioController_xlsx"
                            >
                              <span>
                                <!-- react-text: 306 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 308 -->/audio<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 310 -->/upload-single-file<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 317 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-MongooseController_create"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/mongoose"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/mongoose"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MongooseController_create"
                            >
                              <span>
                                <!-- react-text: 327 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 329 -->/mongoose<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 336 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-MongooseController_findAll"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/mongoose"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/mongoose"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MongooseController_findAll"
                            >
                              <span>
                                <!-- react-text: 346 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 348 -->/mongoose<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 355 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-patch"
                      id="operations-default-MongooseController_update"
                    >
                      <div class="opblock-summary opblock-summary-patch">
                        <button
                          aria-label="patch &ZeroWidthSpace;/api&ZeroWidthSpace;/mongoose&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">PATCH</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/mongoose/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MongooseController_update"
                            >
                              <span>
                                <!-- react-text: 365 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 367 -->/mongoose<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 369 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 376 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-delete"
                      id="operations-default-MongooseController_remove"
                    >
                      <div class="opblock-summary opblock-summary-delete">
                        <button
                          aria-label="delete &ZeroWidthSpace;/api&ZeroWidthSpace;/mongoose&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">DELETE</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/mongoose/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MongooseController_remove"
                            >
                              <span>
                                <!-- react-text: 386 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 388 -->/mongoose<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 390 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 397 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-TypeormController_create"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/typeorm"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/typeorm"
                          >
                            <a
                              class="nostyle"
                              href="#/default/TypeormController_create"
                            >
                              <span>
                                <!-- react-text: 407 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 409 -->/typeorm<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 416 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-TypeormController_findAll"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/typeorm"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/typeorm"
                          >
                            <a
                              class="nostyle"
                              href="#/default/TypeormController_findAll"
                            >
                              <span>
                                <!-- react-text: 426 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 428 -->/typeorm<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 435 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-patch"
                      id="operations-default-TypeormController_update"
                    >
                      <div class="opblock-summary opblock-summary-patch">
                        <button
                          aria-label="patch &ZeroWidthSpace;/api&ZeroWidthSpace;/typeorm&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">PATCH</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/typeorm/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/TypeormController_update"
                            >
                              <span>
                                <!-- react-text: 445 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 447 -->/typeorm<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 449 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 456 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-delete"
                      id="operations-default-TypeormController_remove"
                    >
                      <div class="opblock-summary opblock-summary-delete">
                        <button
                          aria-label="delete &ZeroWidthSpace;/api&ZeroWidthSpace;/typeorm&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">DELETE</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/typeorm/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/TypeormController_remove"
                            >
                              <span>
                                <!-- react-text: 466 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 468 -->/typeorm<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 470 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 477 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-post"
                      id="operations-default-MultiDbTypeormController_create"
                    >
                      <div class="opblock-summary opblock-summary-post">
                        <button
                          aria-label="post &ZeroWidthSpace;/api&ZeroWidthSpace;/multi-db-typeorm"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">POST</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/multi-db-typeorm"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MultiDbTypeormController_create"
                            >
                              <span>
                                <!-- react-text: 487 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 489 -->/multi-db-typeorm<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 496 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-MultiDbTypeormController_findAll"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/multi-db-typeorm"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/multi-db-typeorm"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MultiDbTypeormController_findAll"
                            >
                              <span>
                                <!-- react-text: 506 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 508 -->/multi-db-typeorm<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 515 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-patch"
                      id="operations-default-MultiDbTypeormController_update"
                    >
                      <div class="opblock-summary opblock-summary-patch">
                        <button
                          aria-label="patch &ZeroWidthSpace;/api&ZeroWidthSpace;/multi-db-typeorm&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">PATCH</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/multi-db-typeorm/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MultiDbTypeormController_update"
                            >
                              <span>
                                <!-- react-text: 525 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 527 -->/multi-db-typeorm<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 529 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 536 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-delete"
                      id="operations-default-MultiDbTypeormController_remove"
                    >
                      <div class="opblock-summary opblock-summary-delete">
                        <button
                          aria-label="delete &ZeroWidthSpace;/api&ZeroWidthSpace;/multi-db-typeorm&ZeroWidthSpace;/{id}"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">DELETE</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/multi-db-typeorm/{id}"
                          >
                            <a
                              class="nostyle"
                              href="#/default/MultiDbTypeormController_remove"
                            >
                              <span>
                                <!-- react-text: 546 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 548 -->/multi-db-typeorm<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 550 -->/{id}<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 557 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                  <span>
                    <div
                      class="opblock opblock-get"
                      id="operations-default-DownloadFileController_download"
                    >
                      <div class="opblock-summary opblock-summary-get">
                        <button
                          aria-label="get &ZeroWidthSpace;/api&ZeroWidthSpace;/download-file"
                          aria-expanded="false"
                          class="opblock-summary-control"
                        >
                          <span class="opblock-summary-method">GET</span>
                          <span
                            class="opblock-summary-path"
                            data-path="/api/download-file"
                          >
                            <a
                              class="nostyle"
                              href="#/default/DownloadFileController_download"
                            >
                              <span>
                                <!-- react-text: 567 -->/api<!-- /react-text -->
                                <wbr />
                                <!-- react-text: 569 -->/download-file<!-- /react-text -->
                              </span>
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
                        <!-- react-empty: 576 -->
                      </div>
                      <noscript> </noscript>
                    </div>
                  </span>
                </div>
                <!-- react-text: 578 -->
                <!-- /react-text -->
              </div>
            </div>
          </span>
        </div>
      </section>
    </div>`;
  }

  static get styles() {
    // this is the important part, this array includes our resetted styles and this components styles
    return [globalStyle, css``];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-endpoints-group": MyElement;
  }
}
