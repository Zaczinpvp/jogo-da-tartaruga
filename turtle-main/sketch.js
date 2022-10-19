var tartaruguinha;
var carro



function preload() {
    pathImg = loadImage("track.jpg");
    turtle_running = loadAnimation(
        "tartaruga1.png",
        "tartaruga2.png",
        "tartaruga3.png"
    );
    carroImg= loadImage("car1.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    if(frameCount%120===0){
        car= createSprite(width/2,15)
        car.addImage(carroImg)
        car.velocityY=+10

    }



    pista = createSprite(width/2,height/2);
    pista.addImage(pathImg)
    pista.scale= 2.0

    tartaruguinha = createSprite(width/2,height-5000);
    tartaruguinha.addAnimation("running",turtle_running)
    tartaruguinha.scale= 1.8





}

function draw() {
    background(0);

    drawSprites();

    if(keyDown(LEFT_ARROW)&& tartaruguinha.x>310){
        tartaruguinha.x=tartaruguinha.x-4.5
    }
    if(keyDown(RIGHT_ARROW)&& tartaruguinha.x<1728){
        tartaruguinha.x=tartaruguinha.x+4.5
    }
    if(keyDown(UP_ARROW)){
        tartaruguinha.y=tartaruguinha.y-100
    }
    if(keyDown(DOWN_ARROW)){
        tartaruguinha.y=tartaruguinha.y+150
    }


    text(mouseX+","+mouseY, mouseX,mouseY);

    camera.position.y = tartaruguinha.position.y;

    if(frameCount%120===0){
        car= createSprite(width/2,15)
        car.addImage(carroImg)
        car.velocityY=+10

    }




}
