# Flashcard-Generator

Example:

node new.js "Basic Card" "Who was the first President of the United States?" "George Washington"

node new.js "Cloze Card" "George Washington was the first President of the United States." "George Washington"


process.argv[2] = either "Basic Card" or "Cloze Card"

If "Basic Card"
  process.arv[3] = "Question"
  process.argv[4] = "Answer"
  
If "Cloze Card"
  process.arv[3] = "Full text"
  process.argv[4] = "Cloze"
