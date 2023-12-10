import events from "../../events.mjs";

export default class ASMAnswerForm extends HTMLElement {
	#lang = "en";
	#answers = [];

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
				this.#setLang(newValue);
				break;
		}
	}

	#setLang(lang) {
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

	#setAnswers(answers) {
		// TODO
	}

	updateLang() {
	}

	checkAnswer(ans) {
		// TODO
		console.log(nerdamer(ans).toString());
	}

	addEventListeners() {
		let but = this.shadowRoot.querySelector("slot[name='button']");
		but.addEventListener("click", () => { this.dispatchEvent(events.whatIsAnswer()) });
		let inp = this.shadowRoot.querySelector("slot[name='input']");
		inp.addEventListener("keyup", (event) => {
			if (event.key === "Enter") {
				this.dispatchEvent(events.whatIsAnswer());
			}
		});
		this.addEventListener("answerText", (e) => { this.checkAnswer(e.detail.answer) })
	}

	getHtmlTemplate() {
		return `
			<link rel="stylesheet" href="${import.meta.resolve("./answer-form.css")}"/>
			<div class="answer-form">
				<slot name="input"></slot>
				<slot name="button"></slot>
			</div>`;
	}
}

customElements.define("asm-answer-form", ASMAnswerForm);
