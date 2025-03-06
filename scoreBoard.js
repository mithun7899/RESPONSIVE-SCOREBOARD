const p1btn = document.querySelector('#p1button');
const p2btn = document.querySelector('#p2button');
const reset = document.querySelector('#reset');
const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const select = document.querySelector('#scoreRange');

let p1Score =0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1btn.addEventListener('click',function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
        }
        p1.textContent = p1Score;
        }
    
  
})

p2btn.addEventListener('click',function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
        }
        p2.textContent = p2Score;
        }
    
  
})

select.addEventListener('change',function(){
winningScore = parseInt(this.value);
Reset();
})
reset.addEventListener('click',Reset)
    
function Reset(){
    isGameOver = false;
    p1Score =0;
    p2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('winner');
    p2.classList.remove('loser');
}