var oceano, imageOceano;
var Pc, imagePc;
// inseri esta variavel abaixo
var onda, imageOnda;
var rochas, imageRochas;
var Rochas;



function preload(){

  imageOceano = loadImage("oceano.png");
  imagePc = loadImage("pirata.png");
  imageOnda = loadImage("onda.png");
  imageRochas = loadImage("pedras.png");
  
  
}

function setup() {
  createCanvas(600, 600);
  oceano = createSprite(200,200);
  Pc = createSprite(200,200,30,30);
  
  oceano.addImage(imageOceano);
  oceano.scale= 2
  Pc.addImage(imagePc);
  Pc.scale = 1

  Rochas = new Group();


}

function draw() {
  background(180);


  if(keyDown(UP_ARROW)){
    Pc.y = Pc.y -5;
  }
  if(keyDown(DOWN_ARROW)){
    Pc.y = Pc.y +5;
  }
  if(keyDown(LEFT_ARROW)){
    Pc.x = Pc.x -5;
  }
  if(keyDown(RIGHT_ARROW)){
    Pc.x = Pc.x +5;
  }
  
  if(Rochas.isTouching(Pc)){
   Pc.velocityY = 0;

  }
 
  
  
  ondas();
  Rocha();

  drawSprites();
}


function  ondas() {
//   para qeu não gere um rastro, apesar de ja ter um background. 
//  pus o fframeCount abaixo. que é o contador de frames.
// a cada 60 frames ele solta uma sprite.

   if (frameCount % 5 === 0) {
    onda = createSprite(40,40);

//  abaixo tem o posição aleatoria   
// esquerda para direita
    onda.x = Math.round(random(10,580));
// cima para baixo
    //onda.y = Math.round(random(600,10));

    onda.addImage(imageOnda);
    onda.scale = 2

    onda.velocityY = +4;
    //onda.velocityX = 0.5;

//      //atribua tempo de vida à variável
   onda.lifetime = 590;
     //ajustar a profundidade do barco para cima das ondas
    Pc.depth = onda.depth;

    Pc.depth = Pc.depth + 1;

    

    }
}

function Rocha(){
  if(frameCount % 60 === 0) {
    rochas = createSprite(50,70);
    rochas.x = Math.round(random(0,590));
    rochas.velocityY = +4;

    rochas.addImage(imageRochas);
    rochas.scale = 0.3
    rochas.lifetime = 590;

    rochas.deapth = onda.depth;

    rochas.depth = rochas.depth +1;

    Rochas.add(rochas);


  }       
  


}