export default class ASMPuzzle extends HTMLElement {
	#lang = "en";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = this.getHtmlTemplate();
		this.addEventListeners();
	}

	static get observedAttributes() {
		return ["data-date", "data-lang"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "data-date":
				this.setDate(newValue);
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
	}

	updateLang() {
		this.setDate(this.dataset.date);
		let qStats = this.querySelectorAll("asm-question-status");
		for (let qStat of qStats) {
			qStat.dataset.lang = this.#lang;
		}
	}

	handleChangeLangEvent(event) {
		event.stopPropagation();
		if (this.#lang != event.detail.lang) {
			this.dataset.lang = event.detail.lang;
		}
	}

	setDate(date) {
		date = new Date(date);
		this.shadowRoot.querySelector(".puzzle-card > legend")?.remove();
		if (date.getDate()) {
			let card = this.shadowRoot.querySelector(".puzzle-card");
			let leg = document.createElement("legend");
			leg.innerHTML = `${date.getDate()} ${this.#monthName[this.#lang][date.getMonth()]
				} ${date.getFullYear()}`;
			card.insertBefore(leg, card.firstChild);
		}
	}

	addEventListeners() {
		this.shadowRoot.addEventListener("changeLang", this.handleChangeLangEvent.bind(this));
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./puzzle.css")}"/>
			<fieldset class="puzzle-card">
				<slot></slot>
			</fieldset>`;
	}

	#monthName = {
		"ru": ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		"en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		"eo": ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
	};
}

customElements.define("asm-puzzle", ASMPuzzle);
