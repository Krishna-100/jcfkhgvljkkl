
img = "";
status = "";

function back()
{
    window.location = "index.html";
}

function preload()
{
     load = loadImage("bedrrom.jpg");
}


function setup()
{
    canvas = createCanvas(640, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelloaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
}

function modelloaded()
{
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img1, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.log(error);
}
console.log(results);
}

function draw()
{
image(load, 0 ,0 , 640, 300);
fill("red");
text("Bedroom" , 45, 75);
noFill();
stroke("red");  
rect(45, 60, 440, 260);
}

