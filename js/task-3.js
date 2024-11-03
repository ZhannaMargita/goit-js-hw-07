const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', function () {
  const trimValue = input.value.trim();
  if (trimValue === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = trimValue;
  }
});
