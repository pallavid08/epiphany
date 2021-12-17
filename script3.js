// // //Creating variables to click on cat images
// const imgCardMulti = document.getElementById('card-image-multi');
// const catHissMulti = document.getElementById('cat-card-hiss-multi');
// const catMeowMulti = document.getElementById('cat-card-meow-multi');
// const catPrrrMulti = document.getElementById('cat-card-prrr-multi');
// const catsMulti = documnet.getElementById('cat-images-container-multi');
// const starMulti = document.getElementById('stars-multi');
// const starDivMulti = document.getElementById('stars-text-container-multi');

// catHissMulti.addEventListener('click', handleClickHiss);
// catMeowMulti.addEventListener('click', handleClickMeow);
// catPrrrMulti.addEventListener('click', handleClickPrrr);

//Creating variables to click on cat images
const imgCard = document.getElementById('card-image-multi');
const catHiss = document.getElementById('cat-card-hiss-multi');
const catMeow = document.getElementById('cat-card-meow-multi');
const catPrrr = document.getElementById('cat-card-prrr-multi');
const star = document.getElementById('stars-multi');
const starDiv = document.getElementById('stars-text-container-multi');
const catsMulti = document.getElementById('cat-images-container-multi');

let imgCount = 2;
const handleClickCats = () => {
   //    imgCard.src = `./img/img_statement_${imgCount}.png`;
   //    if (imgCount > 6) {
   //       imgCard.src = './img/img_statement_1.png';
   //    }
   //    imgCount++;
};

const handleClickStars = () => {
   imgCard.src = `./img/img_statement_${imgCount}.png`;

   if (imgCount > 6) {
      imgCard.src = './img/img_control_tool_finish.svg';
      imgCard.style.width = '50px';
      catsMulti.parentElement.removeChild(catsMulti);
      starDiv.parentElement.removeChild(starDiv);
   }
   imgCount++;
};

//Adding Event Listeners for Clicks on Cat Faces
catHiss.addEventListener('click', handleClickCats);
catMeow.addEventListener('click', handleClickCats);
catPrrr.addEventListener('click', handleClickCats);
star.addEventListener('click', handleClickStars);
