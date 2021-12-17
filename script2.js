//Creating variables to click on stars
const imgCardSecond = document.getElementById('card-image-second');
const star = document.getElementById('stars');
const starDiv = document.getElementById('stars-text-container');

const handleClick = () => {
   imgCardSecond.src = `./img/img_statement_${imgCount}.png`;

   if (imgCount > 6) {
      imgCardSecond.src = './img/img_control_tool_finish.svg';
      imgCardSecond.style.width = '50px';
      starDiv.parentElement.removeChild(starDiv);
   }
   imgCount++;
};

//Adding Event Listener for Star Clicks
let imgCount = 2;
star.addEventListener('click', handleClick);
