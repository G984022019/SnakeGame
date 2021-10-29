ctx.fillStyle = "lime";
ctx.fillRect (canv.width/2, canv.height/2,20,20);
setInterval(function(){
  ctx.fillStyle = "black"; //背景設定
  ctx.fillRect (0,0,canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px , y:py});
  for (let i = 0; i<snake.length - 1; i++){
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE,SIZE-2,SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }

  if(score % 5 == 0 && score > 0){
    ctx.fillStyle = "skyblue";
    ctx.fillRect(appleX1*SIZE, appleY1*SIZE-50,SIZE-2,SIZE-2);
  }

  if(appleX1 == px && appleY1 == py){
     tail ++;
     score = score + 2;

   }

  if(appleX == px && appleY == py){
    tail++;
    score++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE,SIZE-2,SIZE-2);

  ctx.font = "48px";
  ctx.textBaseline = "middle";
  ctx.fillText("Score: " + score,20,20);
}, 1000/FPS);
