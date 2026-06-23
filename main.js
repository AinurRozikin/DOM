
// Generate warna random body dengan klik button
const button = document.querySelector('button');
let judul = document.querySelector('h1');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    judul.innerText = randomColor();
})

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    console.log(`rgb(${r},${g},${b})`);
    return `rgb(${r},${g},${b})`;
}

// Generate warna random pada button itu sendiri dengan klik
const buttons = document.querySelectorAll('.button');
const headings = document.querySelectorAll('.heading');

for (const button of buttons) {
    button.addEventListener('click', generateColor);
}

for (const heading of headings) {
    heading.addEventListener('click', generateColor);
}

function generateColor(){
    const warnaButton = randomColor();
    const warnaHeading = randomColor();
    this.style.backgroundColor = warnaButton;
    this.style.color = warnaHeading;
}