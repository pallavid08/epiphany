//Creating variables to click on cat images
const imgCard = document.getElementById('card-image');
const catHiss = document.getElementById('cat-card-hiss');
const catMeow = document.getElementById('cat-card-meow');
const catPrrr = document.getElementById('cat-card-prrr');

//Functions for Event Listeners
const handleClickHiss = () => {
   imgCard.src = './img/img_statement_4.png';
   imgCard.alt = 'Master Splinter';
};

const handleClickMeow = () => {
   imgCard.src = './img/img_statement_3.png';
   imgCard.alt = 'Dr Who';
};
const handleClickPrrr = () => {
   imgCard.src = './img/img_statement_2.png';
   imgCard.alt = 'Snape';
};

//Adding Event Listeners for Clicks on Cat Faces
catHiss.addEventListener('click', handleClickHiss);
catMeow.addEventListener('click', handleClickMeow);
catPrrr.addEventListener('click', handleClickPrrr);
