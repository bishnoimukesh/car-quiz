var readlineSync = require("readline-sync");

console.log("Welcome to Money_Hiest Quiz'!");
console.log("-------------------------");

var player = readlineSync.question("Player name : ");
console.log("-------------------------");
console.log("-------------------------");

var score = 0;

function play(question, correctAnswer) {
  var isCorrectAnswer;
  var answer = readlineSync.question(question);
  if (answer === correctAnswer) {
    isCorrectAnswer = true;
    score ++;
  }
  else{
    isCorrecrAnswer = false;
    score --;
  }
  return isCorrectAnswer;
}

const questions = [
  {
    question: "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?? ",answer: "8"
  },
  {
    question: "How much currency does the gang print at the Royal Mint? ", answer:"984 million euros"
  },
  {
    question: " The Professor’s first name is eventually revealed. What is it? ",
    answer: "Sergio"
  },
  {
  question: "In which country does Raquel track the Professor after the first heist? ", answer: "Philippines"
  },
  {
    question: "“Let the matriarchy begin”: Whose words are these? ", answer:"Nairobi "
  }
];

var i=0;
while ( i < questions.length) {
  var isCorrect = play(questions[i].question, questions[i].answer);
  // console.log("is your answer correct?", isCorrect);
  console.log("your score is: ", score);
  console.log("-------------------------");
  i++; 
}

var topScores = [
  { name: "Pierre", score: 10},
  { name: "Thomas", score: 10},
  { name: "Bradyn", score: 8},
  { name: "Cierra", score: 6},
];

console.log("Top scores, try your luck!")
for (var i = 0; i < topScores.length; i++) {
  console.log(`${topScores[i].name} : ${topScores[i].score}`);
}