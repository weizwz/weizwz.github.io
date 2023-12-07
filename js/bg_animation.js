//樱花

var stop, staticx;
var img = new Image();
img.src =
  'data:image/png;base64,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';

function Sakura(x, y, s, r, fn) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.r = r;
  this.fn = fn;
}

Sakura.prototype.draw = function (cxt) {
  cxt.save();
  var xc = (40 * this.s) / 4;
  cxt.translate(this.x, this.y);
  cxt.rotate(this.r);
  cxt.drawImage(img, 0, 0, 35 * this.s, 35 * this.s);
  //大小
  cxt.restore();
}

Sakura.prototype.update = function () {
  this.x = this.fn.x(this.x, this.y);
  this.y = this.fn.y(this.y, this.y);
  this.r = this.fn.r(this.r);
  if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
    this.r = getRandom('fnr');
    if (Math.random() > 0.4) {
      this.x = getRandom('x');
      this.y = 0;
      this.s = getRandom('s');
      this.r = getRandom('r');
    } else {
      this.x = window.innerWidth
      this.y = getRandom('y');
      this.s = getRandom('s');
      this.r = getRandom('r');
    }
  }
}

SakuraList = function () {
  this.list = [];
}
SakuraList.prototype.push = function (sakura) {
  this.list.push(sakura);
}
SakuraList.prototype.update = function () {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].update();
  }
}
SakuraList.prototype.draw = function (cxt) {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].draw(cxt);
  }
}
SakuraList.prototype.get = function (i) {
  return this.list[i];
}
SakuraList.prototype.size = function () {
  return this.list.length;
}

function getRandom(option) {
  var ret, random;
  switch (option) {
    case 'x':
      ret = Math.random() * window.innerWidth;
      break;
    case 'y':
      ret = Math.random() * window.innerHeight;
      break;
    case 's':
      ret = Math.random();
      break;
    case 'r':
      ret = Math.random() * 6;
      break;
    case 'fnx':
      random = -0.5 + Math.random() * 1;
      ret = function (x, y) {
        return x + 0.5 * random - 0.6;
        //x轴速度
      }
      break;
    case 'fny':
      random = 0.8 + Math.random() * 0.7;
      //y轴速度
      ret = function (x, y) {
        return y + random;
      }
      break;
    case 'fnr':
      random = Math.random() * 0.03;
      ret = function (r) {
        return r + random;
      }
      break;
  }
  return ret;
}

function startSakura() {
  requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  var canvas = document.createElement('canvas'),
    cxt;
  staticx = true;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
  canvas.setAttribute('id', 'canvas_sakura');
  document.getElementsByTagName('body')[0].appendChild(canvas);
  cxt = canvas.getContext('2d');
  var sakuraList = new SakuraList();
  for (var i = 0; i < 10; i++) {
    //数量
    var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
    randomX = getRandom('x');
    randomY = getRandom('y');
    randomR = getRandom('r');
    randomS = getRandom('s');
    randomFnx = getRandom('fnx');
    randomFny = getRandom('fny');
    randomFnR = getRandom('fnr');
    sakura = new Sakura(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR
    })
    sakura.draw(cxt);
    sakuraList.push(sakura);
  }
  stop = requestAnimationFrame(function () {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    sakuraList.update();
    sakuraList.draw(cxt);
    stop = requestAnimationFrame(arguments.callee);
  })
}

window.onresize = function () {
  var canvasSnow = document.getElementById('canvas_snow');
  canvasSnow.width = window.innerWidth;
  canvasSnow.height = window.innerHeight;
}

function stopp(e) {
  if (!e && document.getElementById('canvas_sakura')) {
    var child = document.getElementById('canvas_sakura');
    child.parentNode.removeChild(child);
    window.cancelAnimationFrame(stop);
  } else if (e && !document.getElementById('canvas_sakura')) {
    startSakura();
  }
}
window.addEventListener('DOMContentLoaded', startSakura);
