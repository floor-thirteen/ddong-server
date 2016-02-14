module.exports = function(config) {
	return {
		endpointPrefix: `/api/${config.appPackage.version.substr(0, config.appPackage.version.indexOf('.'))}`
	}
};