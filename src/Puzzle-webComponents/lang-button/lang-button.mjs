import events from "../events.mjs";

export default class ASMLangButton extends HTMLElement {
	#lang = "none";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = this.getHtmlTemplate();
		this.addEventListeners();
	}

	static get observedAttributes() {
		return ["data-lang"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "data-lang":
				switch (newValue) {
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
						this.#lang = "none";
				}
				this.updateLang();
		}
	}

	#displayLang = {
		"en": "EN",
		"ru": "RU",
		"eo": "EO",
		"none": ""
	}

	updateLang() {
		this.shadowRoot.querySelector("button").innerHTML = this.#displayLang[this.#lang];
	}

	addEventListeners() {
		this.shadowRoot.querySelector("button").addEventListener("click",
			() => { this.dispatchEvent(events.changeLang(this.#lang)) }
		);
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./lang-button.css")}"/>
			<button></button>`;
	}
}

customElements.define("asm-lang-button", ASMLangButton);
