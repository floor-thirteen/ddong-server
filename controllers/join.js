'use strict';
/*jshint node: true, esnext: true*/

module.exports = exports = (config) => {
    config.app.get('/join', (req, res) => {
        const ok = (result) => { res.send(result); };
        const senderName = req.body.sender;
        const senderPass = req.body.pass;

        config.db.join(senderName, senderPass)
            .then( (userAdded) => { ok(userAdded); })
            .catch((error    ) => { ok(error);     });
    });
};
