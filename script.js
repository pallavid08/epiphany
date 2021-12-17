//Creating variables to click on cat images
const imgCard = document.getElementById('card-image');
const catHiss = document.getElementById('cat-card-hiss');
const catMeow = document.getElementById('cat-card-meow');
const catPrrr = document.getElementById('cat-card-prrr');

//Function for Event Listeners
let imgCount = 2;
const handleClick = () => {
   imgCard.src = `./img/img_statement_${imgCount}.png`;
   if (imgCount > 6) {
      imgCard.src = './img/img_statement_1.png';
   }
   imgCount++;
};

//Adding Event Listeners for Clicks on Cat Faces
catHiss.addEventListener('click', handleClick);
catMeow.addEventListener('click', handleClick);
catPrrr.addEventListener('click', handleClick);
