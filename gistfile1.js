var userChoice = prompt("Do you choose rock, paper, scissors or spock?");
if (userChoice === "spock") {
computerChoice = prompt("spock always wins!");
}
var computerChoice = Math.random();
if (computerChoice < 0.25) {
	computerChoice = "rock";
} else if(computerChoice <= 0.50) {
	computerChoice = "paper";
} else if (computerChoice <= 0.75) {
    computerChoice = "scissors";
} else {
    computerChoice = "spock";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
else if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
   } 
   else {    
        return "paper wins";
    }
}
else if (choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    }
        else {
            return "scissors wins";
        }}
else if (choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    }
    else {
        return "scissors wins";
    }}
else if (choice1 === "spock") {
    var userChoice = confirm ("spock always wins!");
    return "spock always wins!";
        
}};
   alert(compare(userChoice, computerchoice));
   
  
   
  
