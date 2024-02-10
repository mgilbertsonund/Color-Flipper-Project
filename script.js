const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number between 0 - 3
    // colors [1] and so on
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// this function returns a random number between 0 and length of array
// math floor rounds down the random number to nearest integer (1.2 goes to 1)
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

