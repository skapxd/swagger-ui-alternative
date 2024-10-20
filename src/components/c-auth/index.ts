import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { globalStyle } from "../../swagger-ui";
import { svgIcons } from "../c-svg-icons";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("c-auth")
export class MyElement extends LitElement {
  @property({ type: Boolean })
  private isAuthorized = false;

  @property({ type: Boolean })
  private isModalOpen = false;

  @property({ type: String })
  autoriceValue = "";

  @query("input")
  private input!: HTMLInputElement;

  private handlerLogout() {
    this.autoriceValue = "";
    this.isAuthorized = false;
  }

  private getIcon() {
    return this.isAuthorized ? "#locked" : "#unlocked";
  }

  private handlerModal(state: boolean) {
    this.isModalOpen = state;
  }

  private handlerSubmit(e: Event & { target: HTMLFormElement }) {
    e.preventDefault();
    this.autoriceValue = this.input.value;
    e.target.reset();
    this.isAuthorized = true;
  }

  render() {
    return html`
      <div>${unsafeHTML(svgIcons)}</div>
      <div class="scheme-container">
        <section class="schemes wrapper block col-12">
          <div class="auth-wrapper">
            <button
              class="btn authorize unlocked"
              @click=${() => this.handlerModal(true)}
            >
              <span>Authorize</span>
              <svg width="20" height="20">
                <use href=${this.getIcon()} xlink:href=${this.getIcon()}></use>
              </svg>
            </button>
          </div>
        </section>

        <div class="dialog-ux" ?hidden=${!this.isModalOpen}>
          <div
            class="backdrop-ux"
            @click=${() => this.handlerModal(false)}
          ></div>
          <div class="modal-ux">
            <div class="modal-dialog-ux">
              <div class="modal-ux-inner">
                <div class="modal-ux-header">
                  <h3>Available authorizations</h3>
                  <button
                    type="button"
                    class="close-modal"
                    @click=${() => this.handlerModal(false)}
                  >
                    <svg width="20" height="20">
                      <use href="#close" xlink:href="#close"></use>
                    </svg>
                  </button>
                </div>

                <div class="modal-ux-content">
                  <div class="auth-container">
                    <form @submit=${this.handlerSubmit}>
                      <div>
                        <h4><code>bearer</code>&nbsp; (http, Bearer)</h4>
                        <h6>Authorized</h6>
                        <div class="wrapper"></div>
                        <div class="wrapper">
                          <label>Value:</label>
                          <code ?hidden=${!this.isAuthorized}> ****** </code>
                          <section ?hidden=${this.isAuthorized}>
                            <input type="text" />
                          </section>
                        </div>
                      </div>
                      <div class="auth-btn-wrapper">
                        <button
                          class="btn modal-btn auth authorize button"
                          ?hidden=${this.isAuthorized}
                        >
                          Authorize
                        </button>
                        <button
                          class="btn modal-btn auth button"
                          type="button"
                          ?hidden=${!this.isAuthorized}
                          @click=${this.handlerLogout}
                        >
                          Logout
                        </button>
                        <button
                          class="btn modal-btn auth btn-done button"
                          type="button"
                          @click=${() => this.handlerModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [globalStyle, css``];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-auth": MyElement;
  }
}
