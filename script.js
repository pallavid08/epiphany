//Creating variables to click on cat images
const imgCard = document.getElementById('card-image');
const catHiss = document.getElementById('cat-card-hiss');
const catMeow = document.getElementById('cat-card-meow');
const catPrrr = document.getElementById('cat-card-prrr');

const nextBtn = document.getElementById('new-btn');

//Functions for Event Listeners
const handleClickHiss = () => {
   imgCard.src = './img/img_statement_4.png';
   alt = 'Master Splinter';
};

const handleClickMeow = () => {
   imgCard.src = './img/img_statement_3.png';
   alt = 'Dr Who';
};
const handleClickPrrr = () => {
   imgCard.src = './img/img_statement_4.png';
   alt = 'Snape';
};

//Adding Event Listeners for Clicks
catHiss.addEventListener('click', handleClickHiss);
catMeow.addEventListener('click', handleClickMeow);
catPrr.addEventListener('click', handleClickPrrr);

const clicked = () => {
   console.log('clickkk');
};

nextBtn.addEventListener('click', clicked);
