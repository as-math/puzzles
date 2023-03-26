class PuzzleButtonCheck extends HTMLButtonElement {
  set lang(val) {
    this.innerHTML = PuzzleButtonCheck.text[val];
  }
}
PuzzleButtonCheck.text = {
  en: "Check",
  ru: "Проверить",
  eo: "Kontroli",
};
customElements.define("puzzle-button-check", PuzzleButtonCheck, {
  extends: "button",
});
class QuestionInput extends HTMLInputElement {
  set lang(val) {
    if (this.hasAttribute("data-text-" + val)) {
      this.placeholder = this.getAttribute("data-text-" + val);
    } else if (this.hasAttribute("data-text")) {
      this.placeholder = this.getAttribute("data-text");
    } else {
      this.placeholder = "";
    }
  }
}
customElements.define("question-input", QuestionInput, { extends: "input" });
class PuzzleElement extends HTMLElement {
  constructor() {
    super();
    this.buttons_check = this.getElementsByClassName("puzzle-button-check");
    this.question_inputs = this.getElementsByClassName("question__input");
  }
  set lang(val) {
    Array.from(this.buttons_check).forEach((element) => {
      if (element instanceof PuzzleButtonCheck) {
        element.lang = val;
      }
    });
    Array.from(this.question_inputs).forEach((element) => {
      if (element instanceof QuestionInput) {
        element.lang = val;
      }
    });
  }
}
customElements.define("puzzle-element", PuzzleElement);
class PuzzleButtonLang extends HTMLButtonElement {
  connectedCallback() {
    this.lang = this.getAttribute("data-lang");
    this.innerHTML = this.lang.toUpperCase();
    this.addEventListener("click", () => this.change_lang());
  }
  change_lang() {
    let parent_puzzle = this.closest(".puzzle");
    parent_puzzle.lang = this.lang;
  }
}
customElements.define("puzzle-button-lang", PuzzleButtonLang, {
  extends: "button",
});
document.addEventListener("DOMContentLoaded", (event) => {
  Array.from(document.getElementsByTagName("puzzle-element")).forEach(
    (element) => {
      if (element instanceof PuzzleElement) {
        element.lang = "en";
      }
    }
  );
});
