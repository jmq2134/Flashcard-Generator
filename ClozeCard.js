// Require fs
var fs = require("fs");
var prettyjson = require('prettyjson');

// Create ClozeCard
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, '...');

    // method to create a new card
    this.create = function() {

        var output = {
            text: this.text,
            cloze: this.cloze,
            partial: this.partial,
            type: "cloze"
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
module.exports = ClozeCard;
