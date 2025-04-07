document.addEventListener('DOMContentLoaded', () => {
  const scrollWrappers = document.querySelectorAll('.scroll-wrapper');

  scrollWrappers.forEach((wrapper) => {
    // Создаем кнопки скроллинга
    const leftButton = document.createElement('button');
    leftButton.className = 'scroll-btn left-btn';
    leftButton.innerHTML = '<span class="material-icons">arrow_back</span>';
    
    const rightButton = document.createElement('button');
    rightButton.className = 'scroll-btn right-btn';
    rightButton.innerHTML = '<span class="material-icons">arrow_forward</span>';

    // Добавляем кнопки в обертку
    wrapper.appendChild(leftButton);
    wrapper.appendChild(rightButton);

    // При клике прокручиваем на ширину контейнера
    leftButton.addEventListener('click', () => {
      wrapper.scrollBy({
        left: -wrapper.offsetWidth,
        behavior: 'smooth'
      });
    });

    rightButton.addEventListener('click', () => {
      wrapper.scrollBy({
        left: wrapper.offsetWidth,
        behavior: 'smooth'
      });
    });
  });
});
