const buttons = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelector('h3').textContent;
  const cardParagraph = card.querySelector('p').textContent;

  modalInner.innerHTML = `
    <img src='${imgSrc}'/>
    <h3>${name}</h3>
    <p>${cardParagraph}</p>
  `;

  modalOuter.classList.add('open');
}

buttons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});
