import contentTransform from "./content.mjs";
import questionStatus from "./question-status.mjs";

export default async function(xmlElement, filePath) {
	if (xmlElement.tagName == "puzzle") {
		const puzzle = document.createElement("asm-puzzle");
		const date = xmlElement.getAttribute("date");
		const id = xmlElement.getAttribute("id");
		const langs = xmlElement.getAttribute("langs");
		if (date) {
			puzzle.setAttribute("data-date", date);
		}
		if (langs) {
			puzzle.setAttribute("data-langs", langs);
		}
		puzzle.setAttribute("data-lang", "ru");
		for (const el of xmlElement.querySelectorAll("puzzle > :is(text, image)")) {
			puzzle.append(await contentTransform(el, filePath));
		}
		puzzle.append(questionStatus(id, langs))
		return puzzle;
	} else {
		return;
	}
}