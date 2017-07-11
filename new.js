var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

// Hold the value whether someone is an "admin" or "user"
var cardType = process.argv[2];


if (cardType === "BasicCard") {
    var front = process.argv[3];
    var back = process.argv[4];

    var newBasic = new BasicCard(front, back);
    newBasic.create();

} else {
    var full = process.argv[3];
    var cloze = process.argv[4];

    var newBasic = new ClozeCard(full, cloze);
    newBasic.create();
}
