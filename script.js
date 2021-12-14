const newBtn = document.getElementById('new-btn');

const clicked = () => {
   console.log('clickkk');
   const h2 = document.createElement('h2');
   h2.textContent = 'Helloooooo';
   document.body.appendChild(h2);
};

newBtn.addEventListener('click', clicked);
