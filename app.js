let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s']
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWords(letter) {
	if(letter === 'r') return "Rock"
	if(letter === 's') return "Scissors"
	return "Paper"
}

function win(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} beats ${convertToWords(computerChoice)}${smallCompWord}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(()=>userChoice_div.classList.remove('green-glow'),300);
}

setTimeout(function(){console.log('hello')},1000);

function lose(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} loses to ${convertToWords(computerChoice)}${smallCompWord}. You lost....`;
	userChoice_div.classList.add('red-glow');
	setTimeout(()=>userChoice_div.classList.remove('red-glow'),300);
}	



function draw(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} equals ${convertToWords(computerChoice)}${smallCompWord}. Its a draw`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(()=>userChoice_div.classList.remove('gray-glow'),300);
}


function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			//console.log("Win");
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			//console.log("Lose");
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("Draw");
			draw(userChoice, computerChoice);
			break;
	}
}


function main()
{

rock_div.addEventListener('click',()=>game("r"));

scissors_div.addEventListener('click',()=>game("s"));

paper_div.addEventListener('click',()=>	game("p"));


}

main();