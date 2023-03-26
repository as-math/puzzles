/// <reference path="../../../../typescript/types.d.ts" />
class QuestionInput extends HTMLInputElement {
  set lang(val: Lang) {
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
