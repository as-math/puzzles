export default {
	"amount": 25, 
	"get": (n) => {
		if (n < 10) {
			return import.meta.resolve(`./001-100/00${n}.xml`);
		} else if (n < 100) {
			return import.meta.resolve(`./001-100/0${n}.xml`);
		}
	}
}