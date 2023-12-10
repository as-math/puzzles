export default async function(xmlElement, filePath) {
	switch (xmlElement.tagName) {
		case "text":
			return text(xmlElement);
		case "image":
			return image(xmlElement, filePath);
		default:
			return;
	}
}

async function text(xmlElement) {
	const p = document.createElement("p");
	const lang = xmlElement.getAttribute("lang");
	if (lang) {
		p.setAttribute("data-lang", lang);
	}
	p.innerHTML = xmlElement.innerHTML;
	return p;
}

async function image(xmlElement, filePath) {
	if (xmlElement.getAttribute("type") == "svg") {
		return svgImage(xmlElement, filePath);
	}
	const img = document.createElement("img");
	const src = new URL(xmlElement.innerHTML, filePath);
	img.setAttribute("src", src);
	return img;
}

async function svgImage(xmlElement, filePath) {
	const src = new URL(xmlElement.innerHTML, filePath);
	const domParser = new DOMParser();
	let svg = await fetch(src)
	                .then(res => res.text());
	svg = domParser.parseFromString(svg, "image/svg+xml");
 return svg.firstElementChild;
}