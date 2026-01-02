const form = document.querySelector('.order-title-form');
const inputs = form.querySelectorAll('.order-form');
const toast = document.getElementById('toast');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Страница не обновляется

  // Проверка валидности формы
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Зеленые рамки
  inputs.forEach(input => input.classList.add('success'));

  // Очищаем поля
  form.reset();

  // Показать всплывающее сообщение
  toast.classList.add('show');

  // Через 5 секунд убрать рамки и скрыть сообщение
  setTimeout(() => {
    inputs.forEach(input => input.classList.remove('success'));
    toast.classList.remove('show');
  }, 5000);
});
