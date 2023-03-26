/// <reference path="../../../typescript/types.d.ts" />

class PuzzleButtonCheck extends HTMLButtonElement {
  static text: { [key: string]: string } = {
    en: "Check",
    ru: "Проверить",
    eo: "Kontroli",
  };

  set lang(val: Lang) {
    this.innerHTML = PuzzleButtonCheck.text[val];
  }
}

customElements.define("puzzle-button-check", PuzzleButtonCheck, {
  extends: "button",
});
