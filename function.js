function PositionInitial(){
  for(i = 1;i <= 15 ;i++){
    while(true){
      let randomPosition = Math.floor(Math.random() * 15) +1;
      if(!position.includes(randomPosition)){
        position.push(randomPosition);
        break;
      }
    }
  }

}

function xyInitial(){
  for(i=0;i<15;i++){
    xySet(i);
  }
}

function InitialMove(){
  
  for(i=0;i<15;i++){
    let target    = element[i];
    let target_id = "#"+$(target).attr('id');
    
    switch(position[i]){
      case 1  : xMove[i] = 0;   yMove[i] = 0; break;
      case 2  : xMove[i] = 150; yMove[i] = 0; break;
      case 3  : xMove[i] = 300; yMove[i] = 0; break;
      case 4  : xMove[i] = 450; yMove[i] = 0; break;
      case 5  : xMove[i] = 0;   yMove[i] = 150; break;
      case 6  : xMove[i] = 150; yMove[i] = 150; break;
      case 7  : xMove[i] = 300; yMove[i] = 150; break;
      case 8  : xMove[i] = 450; yMove[i] = 150; break;
      case 9  : xMove[i] = 0;   yMove[i] = 300; break;
      case 10 : xMove[i] = 150; yMove[i] = 300; break;
      case 11 : xMove[i] = 300; yMove[i] = 300; break;
      case 12 : xMove[i] = 450; yMove[i] = 300; break;
      case 13 : xMove[i] = 0;   yMove[i] = 450; break;
      case 14 : xMove[i] = 150; yMove[i] = 450; break;
      case 15 : xMove[i] = 300; yMove[i] = 450; break;
      default:                 break;
    }
    
    $(target_id).css('transform',`translate(${xMove[i]}px,${yMove[i]}px)`);

  }
}


function MovingConfig(){
  for(i=0;i<16;i++){
    
    //xとyの値を設定
    if(x[i] === 1){
      goRight[i] = true;
      goLeft[i]  = false;
    } else if(x[i] === 2 || x[i] === 3){
      goRight[i] = true;
      goLeft[i]  = true;
    } else if(x[i] === 4){
      goRight[i] = false;
      goLeft[i]  = true;
    }
    if(y[i] === 1){
      goTop[i] = false;
      goBottom[i]  = true;
    } else if(y[i] === 2 || y[i] === 3){
      goTop[i] = true;
      goBottom[i]  = true;
    } else if(y[i] === 4){
      goTop[i] = true;
      goBottom[i]  = false;
    }
  }
}
    

function MovingJudge(p){
  if(goRight[p] && empty === position[p] + 1){
    xMove[p] += 150;
    judge = true;
  }
  if(goLeft[p] && empty === position[p] - 1){
    xMove[p] -= 150;
    judge = true;

  }
  if(goTop[p] && empty === position[p] - 4){
    yMove[p] -= 150;
    judge = true;
  }
  if(goBottom[p] && empty === position[p] + 4){
    yMove[p] += 150;
    judge = true;
  }
}

function xySet(n){
  switch(position[n]){
    case 1 : x[n] = 1;  y[n] = 1;  break;
    case 2 : x[n] = 2;  y[n] = 1;  break;
    case 3 : x[n] = 3;  y[n] = 1;  break;
    case 4 : x[n] = 4;  y[n] = 1;  break;
    case 5 : x[n] = 1;  y[n] = 2;  break;
    case 6 : x[n] = 2;  y[n] = 2;  break;
    case 7 : x[n] = 3;  y[n] = 2;  break;
    case 8 : x[n] = 4;  y[n] = 2;  break;
    case 9 : x[n] = 1;  y[n] = 3;  break;
    case 10: x[n] = 2;  y[n] = 3;  break;
    case 11: x[n] = 3;  y[n] = 3;  break;
    case 12: x[n] = 4;  y[n] = 3;  break;
    case 13: x[n] = 1;  y[n] = 4;  break;
    case 14: x[n] = 2;  y[n] = 4;  break;
    case 15: x[n] = 3;  y[n] = 4;  break;
    case 16: x[n] = 4;  y[n] = 4;  break;
    default:                       break;
  }
}

function MovingConfig2(){
  
  for(i=0;i<16;i++){
    let target = element[i];
    let target_id = "#"+$(target).attr('id');
    let now = position[i] -1;
    
    
    $(target_id).on('click',()=>{
      
      MovingJudge(now);
      console.log(judge);
      if(judge){

        $(target_id).css('transform',`translate(${xMove[now]}px,${yMove[now]}px)`);
        
        [position[now],empty] = [empty,position[now]];
        judge = false;

        xySet(now);
        MovingConfig();
      }
      // console.log(x);
      // console.log(y);
      // console.log(goRight);
      // console.log(goLeft);
      // console.log(goTop);
      // console.log(goBottom);
      // console.log(empty);
      // console.log(position);
      // console.log(xMove);
      // console.log(yMove);
    });
  }
}
