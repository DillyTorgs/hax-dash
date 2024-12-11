import { LitElement, html, css } from 'lit';
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HaxUseCaseCard extends LitElement {
  static properties = {
    useCase: { type: Object },
    selected: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 8px;
      border: 1px solid #eee;
      padding: 1rem;
      height: 100%;
      box-sizing: border-box;
    }

    .card.selected {
      border-color: var(--ddd-theme-default-skyMaxLight);
    }

    .card-title {
      font-size: 1.25rem;
      margin: 0 0 1rem 0;
    }

    .card-description {
      color: var(--ddd-theme-default-limestoneMaxLight);
      margin-bottom: 1rem;
    }

    .select-button {
      padding: 0.5rem 1rem;
      background: var(--ddd-theme-default-limestoneGray);
      color: var(--ddd-theme-default-white);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }

    .select-button:hover {
      background: var(--ddd-theme-default-beaverBlue);
    }
  `;

  render() {
    if (!this.useCase) {
      return html``;
    }

    const { id, title, description } = this.useCase;
    
    return html`
      <div class="card ${this.selected ? 'selected' : ''}">
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${description}</p>
        <button 
          class="select-button"
          @click=${() => this.dispatchEvent(new CustomEvent('select-use-case', { detail: id }))}
        >
          ${this.selected ? 'Selected' : 'Select'}
        </button>
      </div>
    `;
  }
}

customElements.define('hax-use-case-card', HaxUseCaseCard);