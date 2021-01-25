const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var man;
var maxdrops=100;
var drops =[];
function preload(){

    manimg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    t1 = loadImage("thunderbolt/1.png");
    t2 = loadImage("thunderbolt/2.png");
    t3 = loadImage("thunderbolt/3.png");
    t4 = loadImage("thunderbolt/4.png");

    
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    man = createSprite(200,560,200,200);
    man.addAnimation("man",manimg);
    man.scale = 0.4;
     
    for(var i =0; i<maxdrops ; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
   
    umbrela = new Umbrella(man.x+10,man.y-50,75);

   
   console.log(drops);



   
    
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrela.display();

    
    for(var i = 0;i<maxdrops;i++){
       drops[i].display();
       drops[i].updateY();
     
    }
    if(frameCount % 50===0){
        thunder = createSprite(random(0,400),50,10,10);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1 : thunder.addImage("t1",t1);
            break;
            case 2 : thunder.addImage("t2",t2);
            break;
            case 3 : thunder.addImage("t3",t3);
            break;
            case 4 : thunder.addImage("t4",t4);
            break;
            default : break;
        }
        thunder.scale = 0.3;
        thunder.lifetime = 10;
    
    }
    
    
   


    drawSprites();
    
}   

