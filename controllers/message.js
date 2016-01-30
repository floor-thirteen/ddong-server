module.exports = (config) => {
    var app = config.app;
    
    app.get('/', (req, res) => {
        var ok = (result) => {
            res.send(result);
        };
        Parse.Push.send({
            where: {
                deviceType: "android"
            },
            data: {
                "alert": "Sweet dreams are made of memes"
            }
        }, {
            success: function() {
                // Push was successful
                ok("Sweet memes are made of dreams");
            },
            error: function(error) {
                // Handle error
                ok(error);
            }
        });
    });
};