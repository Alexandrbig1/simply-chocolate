const scrollupBtn = document.querySelector('.scrollup__btn');

const handlerScrollEvent = function () {
  window.scrollY < 300
    ? scrollupBtn.classList.add('hidden')
    : scrollupBtn.classList.remove('hidden');
};

window.addEventListener('scroll', handlerScrollEvent);

scrollupBtn.addEventListener('click', handlerScrollupBtnClick);

function handlerScrollupBtnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
