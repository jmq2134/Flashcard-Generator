// Require fs
var fs = require("fs");
var prettyjson = require('prettyjson');

// Create BasicCard
var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;

    // method to create a new card
    this.create = function() {
        var output = {
            front: this.front,
            back: this.back,
            type: "basic"
        };

        // log card info to log.txt
        fs.appendFile("log.txt", JSON.stringify(output) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });

        // console.log(JSON.stringify(output));
        console.log(prettyjson.render(output, { keysColor: 'blue', stringColor: 'white' }));

    };
}

// Export data
module.exports = BasicCard;
