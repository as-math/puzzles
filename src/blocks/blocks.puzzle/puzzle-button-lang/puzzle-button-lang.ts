/// <reference path="../../../typescript/types.d.ts" />

class PuzzleButtonLang extends HTMLButtonElement {
  lang: Lang;
  connectedCallback() {
    this.lang = this.getAttribute("data-lang") as Lang;
    this.innerHTML = this.lang.toUpperCase();
    this.addEventListener("click", () => this.change_lang());
  }

  change_lang(): void {
    let parent_puzzle = this.closest(".puzzle") as PuzzleElement;
    parent_puzzle.lang = this.lang;
  }
}

customElements.define("puzzle-button-lang", PuzzleButtonLang, {
  extends: "button",
});
