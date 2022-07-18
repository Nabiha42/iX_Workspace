const guessInput = document.getElementById('guess');
const buttonSubmit = document.getElementById('submit');


buttonSubmit.addEventListener('click', (event) => {

    const check = guessInput.value;
    let random = Math.floor(Math.random() * (10 - 1)) + 1;
    if (check === random) {
        console.log("You guesed right!");
        return;
    }
    else {
        console.log("try again");
    }
    console.log(check);
    console.log(random);

//   const resultDiv = document.createElement('div');
//   resultDiv.innerHTML = '$' + total.toFixed(2);

//   resultDiv.classList.add('alert');
//   resultDiv.classList.add('alert-primary');
//   resultDiv.classList.add('mt-4');

//   cardBody.append(resultDiv);
})