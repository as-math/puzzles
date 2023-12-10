const events = {
	whatIsAnswer: function () {
		return new CustomEvent("whatIsAnswer", { bubbles: true, composed: true });
	},

	answerText: function (answer) {
		return new CustomEvent("answerText", {
			bubbles: true, composed: true,
			detail: { answer: answer }
		});
	},

	changeLang: function (lang) {
		return new CustomEvent("changeLang", { bubbles: true, composed: true, detail: { lang: lang } });
	}
}

export default events;