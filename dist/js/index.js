const buttons = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

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

// close modal
function closeModal() {
  modalOuter.classList.remove('open');
}

// handle click off
function handleClickOff(event) {
  const isOutSide = event.target.closest('.modal-inner');
  if (!isOutSide) {
    closeModal();
  }
}

// listen for click off
modalOuter.addEventListener('click', handleClickOff);

buttons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});

// escModal
function escModal(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// listen for esc key
window.addEventListener('keydown', escModal);
