 x =200;
let ellipSize = 50;
let yPos =0;
let sunSize=0;
let lids =0;
function setup(){
  createCanvas(400,400);
}

function draw() {
  background(4, 4, 28);

 

  noFill();
  
  // astroides
   fill(130, 130, 191);
  ellipse(100,yPos+175,sunSize+60);
  yPos = yPos - 1;
  sunSize=sunSize + 0.25;
  
  fill(130, 130, 191);
  ellipse(10,yPos+175,sunSize+60);
  yPos = yPos - 1;
  sunSize=sunSize + 0.25;
  
  
  fill(120, 130, 191);
  ellipse(290,yPos+175,sunSize+60);
  yPos = yPos + 1;
  sunSize=sunSize + 0.25;
  
   fill(130, 130, 191);
  ellipse(370,yPos+175,sunSize+60);
  yPos = yPos -1;
  sunSize=sunSize + 0.25;
  
  if( sunSize>=50)
    {
       sunSize= 10
    }
  
  if( yPos<= -270)
    {
       yPos= 10;
    }
  

 
     
  //body
  fill(40,50,60)
  ellipse(x,175,x,175);  
  ellipse(125,70,50,120);
  ellipse(125,60,80,70);                                           ellipse(270,60,80,70);
  ellipse(270,70,50,120);
  
  //eyes
   fill(255,255,255)
    ellipse(125,60,70,60);                                           ellipse(270,60,70,60);
  //head
  fill(100,30,150)
  stroke(200,70,200,150);
  strokeWeight(10);
  rect(175,200,50,25,10);
  
  ellipse(260,60,45,40);
  ellipse(135,60,45,40);

  ///BCKG
  fill(73, 73, 117)
  noStroke();
  rect(0,260,400,400);

  //eylids
  fill(40,50,60)
  arc(125, lids +65, 74.5, 80, PI, -0.8 + QUARTER_PI, PIE);
  
  fill(40,50,60)
  arc(270, lids +65, 74.5, 80, PI, -0.8 + QUARTER_PI, PIE);
  lids = lids +1;
  fill(40,50,60)
  arc(126, 65, 75, 80, PI, -0.8 + QUARTER_PI, PIE);
  
  fill(40,50,60)
  arc(269, 65, 75, 80, PI, -0.8 + QUARTER_PI, PIE);
  lids = lids +0.;
  if(lids>14){
    lids =-4
  }
  
}