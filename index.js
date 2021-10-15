const element  = $('#target-wrap').children();
let   x        = [];
let   y        = [];
let   goRight  = [true,true,true,false,true,true,true,false,true,true,true,false,true,true,true];
let   goLeft   = [false,true,true,true,false,true,true,true,false,true,true,true,false,true,true];
let   goTop    = [false,false,false,false,true,true,true,true,true,true,true,true,true,true,true];
let   goBottom = [true,true,true,true,true,true,true,true,true,true,true,true,false,false,false];
let   empty    = 16;
let   position = [];
let   xMove    = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let   yMove    = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let   judge    = false;

PositionInitial();
xyInitial();
InitialMove();

MovingConfig();
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



MovingConfig2();
  
  
  

