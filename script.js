let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      default:
        screen.innerText += e.target.innerText;
    }
  });
});

function operate() {
  console.log(screen.innerText);
  screen.innerText = eval(screen.innerText);
}

function allClear() {
  screen.innerText = '';
}

function deleteNumber() {
  screen.innerText = screen.innerText.slice(0, -1);
}
