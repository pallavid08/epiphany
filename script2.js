//Creating variables to click on stars
const imgCardSecond = document.getElementById('card-image-second');
const star = document.getElementById('stars');

let imgCount = 2;
star.addEventListener('click', function () {
   imgCardSecond.src = `./img/img_statement_${imgCount}.png`;
   imgCardSecond.alt = 'Quote Image';

   if (x > 6) {
      window.location = '/third.html';
   }
   x++;
});
