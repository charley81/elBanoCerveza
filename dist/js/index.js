const buttons = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// handle card button click to open modal
function handleCardButtonClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelector('h3').textContent;
  const cardParagraph = card.querySelector('p').textContent;

  // add html img to inner modal
  modalInner.innerHTML = `
    <img width='300px' height='300px' src='${imgSrc}'/>
    <h3>${name}</h3>
    <p>${cardParagraph}</p>
  `;

  // open modal
  modalOuter.classList.add('open');
}

// close modal function
function closeModal() {
  modalOuter.classList.remove('open');
}

// listen for click off of modal to close it
modalOuter.addEventListener('click', (event) => {
  const isOutSide = event.target.closest('.modal-inner');
  if (!isOutSide) {
    closeModal();
  }
});

// listen for card button click to display modal
buttons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});


// listen for esc key to close modal
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
