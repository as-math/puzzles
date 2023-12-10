import events from "../events.mjs";

export default class ASMQuestionStatus extends HTMLElement {
	#lang = "en";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = this.getHtmlTemplate();
		this.addEventListeners();
	}

	static get observedAttributes() {
		return ["data-question-id", "data-langs", "data-lang"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "data-question-id":
				this.#newDataQuestionId(newValue);
				break;
			case "data-langs":
				this.#newDataLangs(newValue);
				break;
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
		this.dispatchEvent(events.changeLang(this.#lang));
	}

	#newDataLangs(str) {
		let langs = str.split(" ");
		let langBut = this.shadowRoot.querySelector(".lang-buttons");
		langBut.innerHTML = "";
		for (let i in langs) {
			let but = document.createElement("asm-lang-button");
			but.setAttribute("data-lang", langs[i]);
			langBut.appendChild(but);
		}
		this.updateLang();
	}

	#newDataQuestionId(id) {
		let qId = this.shadowRoot.querySelector(".question-id");
			if (id) {
				qId.innerHTML = `#${id}`;
			} else {
				qId.innerHTML = "";
			}
	}

	updateLang() {
		let langBut = this.shadowRoot.querySelector(".lang-buttons");
		for (let but of langBut.children) {
			if (but.dataset.lang == this.#lang) {
				but.classList.add("active");
			} else {
				but.classList.remove("active");
			}
		}
	}

	handleLangEvent(event) {
		event.stopPropagation();
		if (this.#lang != event.detail.lang) {
			this.dataset.lang = event.detail.lang;
		}
	}

	addEventListeners() {
		this.shadowRoot.addEventListener("changeLang", this.handleLangEvent.bind(this));
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./question-status.css")}"/>
			<div class="question-status">
				<div class="question-id">#</div>
				<div class="question-result"></div>
				<div class="lang-buttons">
				</div>
			</div>`;
	}
}

customElements.define("asm-question-status", ASMQuestionStatus);
