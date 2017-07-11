var BasicCard = require("./BasicCard");
var inquirer = require('inquirer');

var CreateCard = new BasicCard();

inquirer.prompt([
        // Begin by finding cardType either BasicCard or ClozeCard   
        {
            type: "checkbox",
            message: "What type of flashcard would you like to create?",
            choices: ["BasicCard", "ClozeCard"],
            name: "cardType"
        }
    ]).then(function(user) {
            if (user.cardType == "BasicCard") {
                // Find out the BasicCard.front and BasicCard.back
                inquirer.prompt([{
                    type: "input",
                    message: "What does the front of the card say?",
                    name: "front"
                }, {
                    type: "input",
                    message: "What does the back of the card say?",
                    name: "back"
                }]).then(function(user) {

                    console.log(JSON.stringify(user, null, 2));

                    var front = user.front;
                    var back = user.back;
                    console.log(front);
                    console.log(back);

                    CreateCard.newBasicCard(front, back);
                });
            } else {
                // Cloze card functions
                inquirer.prompt([{
                    type: "input",
                    message: "What is the full text?",
                    name: "full"
                }, {
                    type: "input",
                    message: "What is the cloze deletion?",
                    name: "cloze"
                }]).then(function(user) {
                        console.log(JSON.stringify(user, null, 2));

                        var full = user.full;
                        var cloze = user.cloze;
                        console.log(full);
                        console.log(cloze);

                        CreateCard.newBasicCard(full, cloze);
                        //         if (user.full || user.cloze = "") {
                        //             console.log("Error");
                        //         } else {
                        //             var full = user.full;
                        //             var cloze = user.cloze;
                        //             console.log(full);
                        //             console.log(cloze);

                        //             CreateCard.newBasicCard(full, cloze);
                        //         } // closer else
                        //     } // close if
                        // } // close else

                    }
                });
