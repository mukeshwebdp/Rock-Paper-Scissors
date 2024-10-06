const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const userHandIcon = document.querySelector('.user.hand-icon');
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result');
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

const rockIcon = "✊";
const paperIcon = "🤚";
const scissorsIcon = "✌️";
const iconsList = [rockIcon, paperIcon, scissorsIcon];

function calculateResult(selectedIcon,winningIcon){
    userHandIcon.innerText = '🤜';
    computerHandIcon.innerText = '🤛';
    result.innerText = '';
    userHandIcon.classList.add('shakeUserHand');
    computerHandIcon.classList.add('shakeComputerHand');
    setTimeout(()=>{
        userHandIcon.classList.remove('shakeUserHand');
        computerHandIcon.classList.remove('shakeComputerHand')
        userHandIcon.innerText = selectedIcon;
        const computerChoice = Math.floor(Math.random()*3);
        computerHandIcon.innerText = iconsList[computerChoice];
        if(userHandIcon.innerText===computerHandIcon.innerText){
            result.innerText = 'Draw';
            result.style.color='orange important!';
        }else if(computerHandIcon.innerText === winningIcon){
            userScore.innerText = +userScore.innerText + 1;
            result.innerText = 'You won !!'
        }else{
            computerScore.innerText = +computerScore.innerText + 1;
            result.innerText = 'Computer won !!'
            
        }
    },1000)
}

rockBtn.addEventListener('click',()=>{
    calculateResult(rockIcon, scissorsIcon);
})
paperBtn.addEventListener('click',()=>{
    calculateResult(paperIcon, rockIcon);
})
scissorsBtn.addEventListener('click',()=>{
    calculateResult(scissorsIcon, paperIcon);
})
