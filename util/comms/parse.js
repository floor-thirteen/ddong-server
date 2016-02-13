module.exports = (() => {
	const Parse = require('parse/node').Parse;
	Parse.initialize(
		process.env.Parse_Key_Application,
		process.env.Parse_Key_Javascript,
		process.env.Parse_Key_Master);
	return Parse;
})();
