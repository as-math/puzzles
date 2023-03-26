/// <reference path="../blocks/blocks.puzzle/puzzle/puzzle.ts" />
/// <reference path="../blocks/blocks.puzzle/puzzle-button-check/puzzle-button-check.ts" />
/// <reference path="../blocks/blocks.puzzle/puzzle-button-lang/puzzle-button-lang.ts" />
/// <reference path="../blocks/blocks.puzzle/question/__input/question__input.ts" />

document.addEventListener("DOMContentLoaded", (event) => {
  Array.from(document.getElementsByTagName("puzzle-element")).forEach(
    (element) => {
      if (element instanceof PuzzleElement) {
        element.lang = "en";
      }
    }
  );
});
