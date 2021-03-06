const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   
   

const guessInput = document.getElementById('guess_input');
const buttonSubmit = document.getElementById('submit_button');
const buttonHint = document.getElementById('hint_button');
const text = document.getElementById('display_text');
const form = document.getElementById('form');

buttonSubmit.addEventListener('click', (event)=> {
    event.preventDefault;
    checkGuess();
})

buttonHint.addEventListener('click', (event)=> {
    event.preventDefault;
    giveHint();
})

let gen_exp;
function generateExplanation() {
    var rand_exp = movies.explanation[Math.floor(Math.random() * movies.explanation.length)];
    text.innerHTML = rand_exp;
    gen_exp = rand_exp;
}

function checkGuess() {
    var check = guessInput.value;
    if (check) {
        for (let i=0; i < title.length; i++) {
            if (check == title[i]) {
                text.innerHTML = "You guessed right!";
            }    
        }
        text.innerHTML = "try again";
        text.innerHTML = gen_exp;
    }
    else {
        text.innerHTML = "please enter a guess";
        text.classList.add('alert-danger');
        text.classList.remove('alert-danger');
        text.innerHTML = gen_exp;
    }
}

function giveHint() {
    let index_exp = explanation.indexOf(gen_exp);
    for (let i=0; i <hint.length; i++) {
        if (i == index_exp) {
            text.innerHTML = hint[i];        
        }
    }
    text.innerHTML = gen_exp;
}

generateExplanation();



