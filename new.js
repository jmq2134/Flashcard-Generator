var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

// Hold the value whether someone is an "admin" or "user"
var cardType = process.argv[2];


if (cardType === "Basic Card") {
    var front = process.argv[3];
    var back = process.argv[4];

    var newBasic = new BasicCard(front, back);
    newBasic.create();

} else if (cardType === "Cloze Card") {
    var full = process.argv[3];
    var cloze = process.argv[4];

    var newBasic = new ClozeCard(full, cloze);
    newBasic.create();
}
else {
	console.log("Choose either a Basic Card or Cloze Card");
}
