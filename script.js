window.addEventListener('keydown', function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
});

const keys = document.querySelectorAll('key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
