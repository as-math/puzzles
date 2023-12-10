export default function(puzzleId, langs) {
	const qStatus = document.createElement("asm-question-status");
	if (puzzleId) {
		qStatus.setAttribute("data-question-id", puzzleId);
	}
	if (langs) {
		qStatus.setAttribute("data-langs", langs);
	}
	qStatus.setAttribute("data-lang", "ru");
	return qStatus;
}