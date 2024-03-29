import puzzlesPath from "../puzzles/puzzles.mjs";
import puzzleTransform from "./Puzzle-transformToHTML/puzzle.mjs"

const domParser = new DOMParser();

async function getPuzzleHTML(url) {
	const xmlURL = import.meta.resolve(url);
	let xml = await fetch(xmlURL)
	                .then(res => res.text());
	xml = domParser.parseFromString(xml, "application/xml");
	return await puzzleTransform(xml.firstElementChild, xmlURL);
}

async function loadAll() {
	const content = document.querySelector(".content");
	let puzzle;
	for (let i = puzzlesPath["amount"]; i > 0; i--) {
		puzzle = await getPuzzleHTML(puzzlesPath["get"](i));
		content.append(puzzle);
	}
}

async function loadOne(i) {
	const container = document.querySelector("#container");
	const puzzle = await getPuzzleHTML(puzzlesPath["get"](i));
	container.innerHTML = "";
	container.append(puzzle);
}

export {loadAll, loadOne};