export default class ASMAnswerButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = this.getHtmlTemplate();
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./answer-button.css")}"/>
			<button>
				<svg viewBox="-22 -12 24 24" xmlns="http://www.w3.org/2000/svg">
					<path id="arrow" d="M 0 0 L -10 10 M 0 0 L -10 -10 M 0 0 L -20 0" stroke-width="4" stroke-linecap="round"/>
				</svg>
			</button>`;
	}
}

customElements.define("asm-answer-button", ASMAnswerButton);
