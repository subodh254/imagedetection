status ="";
img ="";
function preload(){
   img = loadimage('nerf_blaster.jpg');
}

function setup(){
    canvas.createCanvas()
    canvas.center()

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML  = "decting - object";
}

function modelLoaded(){
    console.log("model loaded !");
    status = true;
    objectDetector.detect(img,gotRelust);
}

function gotRelust()
{
    if(error)
    {
        console.log(error);

    } else {
        console.log(results);
    }
}