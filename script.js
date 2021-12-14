//Creating variables to click on cat images
const imgCard = document.getElementById('card-image');
const catHiss = document.getElementById('cat-card-hiss');
const catMeow = document.getElementById('cat-card-meow');
const catPrrr = document.getElementById('cat-card-prrr');

//Creating variables
const imgCardSecond = document.getElementById('card-image-second');

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

const handleImageChange = () => {
   console.log('clickedddd');
   imgCard.src = './img/img_statement_4.png';
   alt = 'image';
   // for (let i = 1; i <= 6; i++) {
   //    imgCard.src = `./img/img_statement_${2}.png`;
   //    alt = 'new quote image';
   // }
};
//Adding Event Listeners for Clicks on Cat Faces
catHiss.addEventListener('click', handleClickHiss);
catMeow.addEventListener('click', handleClickMeow);
catPrrr.addEventListener('click', handleClickPrrr);
