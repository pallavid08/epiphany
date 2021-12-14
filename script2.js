const imgCardSecond = document.getElementById('card-image-second');
const star = document.getElementById('stars');

star.addEventListener('click', function () {
   let i = 4;
   imgCardSecond.src = `./img/img_statement_${i}.png`;
   //   imgCardSecond.alt = 'New Image';
});
