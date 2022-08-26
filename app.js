const body = document.querySelector("body");

function r(from, to) {
  return ~~(Math.random() * (to - from + 1) + from);
}

function getChar() {
  return String.fromCharCode(r(0x1401, 0x141b));
}
function pick() {
  return arguments[r(0, arguments.length - 1)];
}
function loop(fn, delay) {
  let stamp = Date.now();
  function _loop() {
    if (Date.now() - stamp >= delay) {
      fn();
      stamp = Date.now();
    }
    requestAnimationFrame(_loop);
  }
  requestAnimationFrame(_loop);
}
class Div {
  constructor() {
    this.element = document.createElement("div");
    this.element.textContent = getChar();
    this.element.style.setProperty("--deg", r(45, 360) + "deg");
    let color = pick("#577399", "#577399", "#fe5f55", "#fe5f55", "#fee440");
    this.element.style.setProperty("--colorbg", color);
    this.element.style.setProperty("--colortx", color);
  }
}
function cons(target) {
  let root = document.createDocumentFragment();
  for (let i = 0; i < 500; i++) {
    let div = new Div();
    root.appendChild(div.element);
  }
  body.appendChild(root);
}
cons(body);
