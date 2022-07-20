const guessInput = document.getElementById('guess_input');
const form = document.getElementById('form');
const result = document.getElementById('result');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const check = guessInput.value;
    const random = Math.floor(Math.random() * (10 - 1)) + 1;
    result.classList.add('alert');
    if (check == random) {
        result.innerHTML = "You guesed right!";
        result.classList.remove('alert-danger');
        result.classList.add('alert-success');
    }
    else {
        result.innerHTML = "try again";
        result.classList.remove('alert-success');
        result.classList.add('alert-danger');
    }
    
})