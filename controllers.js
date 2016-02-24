module.exports = function(params) {
    const fs = require('fs'),
        path = require('path'),
        base = path.dirname(process.mainModule.filename),
        app = params.app,
        db = params.db,
        appPackage = require('./package'),
        apiHelper = require('./util/apiHelper')({
            appPackage
        }),
        controllers = fs.readdirSync('./controllers');

    controllers.forEach((controller) => {
        const name = controller.match(/^(.+)\.js$/)[1];
        require(`./controllers/${controller}`)({
            app,
            db,
            base,
            name,
            apiHelper
        });
    });
};