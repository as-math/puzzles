export default {
	"amount": 26, 
	"get": (n) => {
		if (n < 10) {
			return import.meta.resolve(`./001-100/00${n}.xml`);
		} else if (n < 100) {
			return import.meta.resolve(`./001-100/0${n}.xml`);
		}
	}
}