export const slideToggle = (element: HTMLElement) => {
  if (!element.classList.contains('active')) {
    element.classList.add('active');
    element.style.height = 'auto';
    const height = element.clientHeight + 'px';

    element.style.height = '0px';

    setTimeout(function () {
      element.style.height = height;
    }, 0);
  } else {
    element.style.height = '0px';
    element.addEventListener('transitionend', () => element.classList.remove('active'), { once: true });
  }
};
