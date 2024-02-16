const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);


// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


document.onmousemove = (e) => {
  document.onclick = () =>{
    let circle = document.createElement('div');
    circle.classList.add('click');
    circle.style.left= e.pageX + 'px';
    circle.style.top= e.pageY + 'px';
    document.body.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  };
};
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');



function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
    
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
    currentSlide = index;
    updateIndicators();
  });
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });
}

updateIndicators();


