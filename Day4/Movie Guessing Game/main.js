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

buttonSubmit.addEventListener('click', (event) => {
    getName();
})

buttonHint.addEventListener('click', (event) => {
    hintText.classList.toggle('movie_hint');

})

// function guessMovie() {
//     var exp = [Math.floor(Math.random() * movies.explanation.length)];
//     document.getElementById("display_text").innerHTML = exp;
//     return exp;

//     // if (movieInput == movie) {
//     //     console.log("You guessed right!")
//     // }
// }

// guessMovie();


// // function getHint(movie)   {
// //     if (guessInput==None) {
// //         var resul
// //         result = 
// //     }
// //     document.getElementById("hintText").style.visibility="visible";
// //     return false;
// // }
function getName(guessInput) {
    var guess = document.getElementById("display_text", guessInput);
    return guess;

}
getName();
