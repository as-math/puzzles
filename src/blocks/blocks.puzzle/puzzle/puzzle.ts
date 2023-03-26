/// <reference path="../../../typescript/types.d.ts" />
/// <reference path="../puzzle-button-check/puzzle-button-check.ts" />
/// <reference path="../question/__input/question__input.ts" />
class PuzzleElement extends HTMLElement {
  buttons_check: HTMLCollection;
  question_inputs: HTMLCollection;
  constructor() {
    super();
    this.buttons_check = this.getElementsByClassName("puzzle-button-check");
    this.question_inputs = this.getElementsByClassName("question__input");
  }
  set lang(val: Lang) {
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
