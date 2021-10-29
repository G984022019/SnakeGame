document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;  //縦20個　蛇の大きさ
const FPS = 15;   // frame per second
const MIN = 5;   // 蛇の本体の長さ

let px = py = SIZE/2; //
let xd = yd = 0;
let snake = [];
let score = 0;
let tail = MIN;  //蛇の最大の長さ
let appleX = appleY = 15;

 let appleX1 = appleY1 = 5; // りんごの座標
let timerID;
