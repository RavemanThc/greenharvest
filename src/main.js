const inputs = document.querySelectorAll('.order-form');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.value.trim() !== '') {
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
  });
});
