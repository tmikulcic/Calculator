let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
  });
});
