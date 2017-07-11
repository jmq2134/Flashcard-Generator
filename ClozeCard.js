// Basic Card constructor to take in the "full" text & "cloze" text of card
function ClozeCard(text, cloze) {
    this.fullText = full;
    this.clozeText = cloze;
    this.text = full.split(cloze);
    return new ClozeCard(text, cloze);
};

module.exports = ClozeCard;
