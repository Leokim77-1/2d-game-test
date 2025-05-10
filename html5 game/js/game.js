import AnalogStick from './AnalogStick.js';





const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 844;
canvas.height = 320;

const player = {
    x: 50,
    y: 150,
    width: 120,
    height: 120,
    color: 'red',
};

const ground = {
    x: 0,
    y: 270,
    width: 844,
    height: 50,
    color: 'lightgreen',
}

const background = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    color: 'lightblue',
}


const stick = new AnalogStick({
    player: player,
    speed: 3,
    element: '#gameContainer'
  });
  stick.enable();
  

    


const img =  new Image();
img.src = "./assets/sprite.png";



 function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = background.color;
ctx.fillRect(background.x, background.y, background.width, background.height);



        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);     
        
 
      
   



        
        ctx.fillStyle = ground.color;
        ctx.fillRect(ground.x, ground.y, ground.width, ground.height);
       
if (img.complete){
    ctx.drawImage(img, player.x, player.y, player.width, player.height);   
}





}


  

img.onload = function() {
  console.log("image loaded");
  draw();
}







 function gameLoop(){
    draw();  
    requestAnimationFrame(gameLoop);
 }

 gameLoop();