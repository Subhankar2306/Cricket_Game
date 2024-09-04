let scorestr = localStorage.getItem('Score');
let score;
resetscore(scorestr);

function resetscore(scorestr){
  score = scorestr ? JSON.parse(scorestr) : {
    win:0,
    lost: 0,
    tie: 0,
  };
  score.displayScore= function(){
  return `Score is : Won: ${score.win} , Lost: ${score.lost} , Tie: ${score.tie}`; 
  };
  sowResult();
}
function computerGenerareChoise() {
  // This will generate random number between 0 to 3
  let randomNumber = Math.random() * 3;
  // let Choise;
  if (randomNumber > 0 && randomNumber <= 1) {
   return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove){
  if (userMove==='Bat'){
    if(computerMove === 'Ball'){
      score.win ++;
      return 'You win.';
    }else if(computerMove=== 'Bat'){
      score.tie ++;
      return `It's a tie tie`;
    }
    else if(computerMove === 'Stump'){
      score.lost ++;
      return 'Computer has Own ';
    }
  }
  else if(userMove==='Ball'){
    if(computerMove === 'Ball'){
      score.tie ++;
      return `It's a tie tie`;
    }
    else if(computerMove=== 'Bat'){
      score.lost ++;
      return 'Computer has Own ' ;
    }
    else if(computerMove === 'Stump'){
      score.win++;
      return 'User won.';
    }

  }
  else{
    if(computerMove=== 'Ball'){
      score.lost++;
      return'Computer has Own ';
    }else if(computerMove=== 'Bat'){
      score.win++;
      return 'User won.' ;
    }
    else if(computerMove === 'Stump'){
      score.tie++;
      return `It's a tie tie` ;
    }
  }
}
function sowResult (userMove , computerMove, result ){
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = userMove ? `You have choosen ${userMove}` : '';

  document.querySelector('#computer-move').innerText = computerMove  ? `Computer choise is ${computerMove}`: '';

  document.querySelector('#result').innerText = result || '' ;

  document.querySelector('#score').innerText = score.displayScore();
}
