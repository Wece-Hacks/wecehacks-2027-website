// Schedule page: open a pop-up with event details when a card is clicked.

const modal = document.getElementById('event-modal');
const modalTime = modal.querySelector('.modal-time');
const modalTitle = modal.querySelector('.modal-title');
const modalBadge = modal.querySelector('.modal-badge');
const modalBody = modal.querySelector('.modal-body');
const closeButton = modal.querySelector('.modal-close');

const EVENT_TYPES = ['keynote', 'workshop', 'social'];

function openEvent(card) {
  // Copy the card's type class onto the pop-up so it gets the same suit and color
  const type = EVENT_TYPES.find((t) => card.classList.contains(t));
  modal.className = 'event-modal' + (type ? ' ' + type : '');

  modalTime.textContent = card.querySelector('.time').textContent;
  modalTitle.textContent = card.querySelector('.title').textContent;

  const badge = card.querySelector('.badge');
  modalBadge.textContent = badge ? badge.textContent : '';

  // Pull the hidden details out of the card's <template>
  const details = card.querySelector('template.details');
  modalBody.replaceChildren(details ? details.content.cloneNode(true) : '');

  modal.showModal();
}

// Stagger the "deal" animation within each day, and wire up clicks
document.querySelectorAll('.hand').forEach((hand) => {
  hand.querySelectorAll('.event-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
    card.querySelector('.card-face').addEventListener('click', () => openEvent(card));
  });
});

closeButton.addEventListener('click', () => modal.close());

// Clicking the dimmed area outside the pop-up closes it.
// (Esc closes it automatically because it's a <dialog>.)
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});