import events from "../../events.mjs";

export default class ASMAnswerInput extends HTMLElement {
	#lang = "en";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = this.getHtmlTemplate();
		this.addEventListeners();
	}

	static get observedAttributes() {
		return ["data-lang",];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "data-lang":
				this.#newDataLang(newValue);
				break;
		}
	}

	#newDataLang(lang) {
		switch (lang) {
			case "en":
			case "EN":
			case "En":
				this.#lang = "en";
				break;
			case "ru":
			case "RU":
			case "Ru":
				this.#lang = "ru";
				break;
			case "eo":
			case "EO":
			case "Eo":
				this.#lang = "eo";
				break;
			default:
				this.dataset.lang = "en";
		}
		this.updateLang();
	}

	updateLang() {
	}

	addEventListeners() {
		this.parentElement.addEventListener("whatIsAnswer",
			() => { this.dispatchEvent(events.answerText(this.shadowRoot.querySelector("input").value)) }
		)
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./answer-input.css")}"/>
			<div class="answer-input">
				<input>
				<img src="${import.meta.resolve("./question.svg")}">
			</div>`;
	}
}

customElements.define("asm-answer-input", ASMAnswerInput);
