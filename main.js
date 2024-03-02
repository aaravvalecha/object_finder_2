status="";
objects=[];
function setup(){
    canvas=createCanvas(480,380)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();

}
function start(){
    object_detecter=ml5.objectDetector('cocossd',model_loaded);
    document.getElementById("status").innerHTML="Status : Object Detecting";
objects=document.getElementById("object").value;
console.log(objects);
}
function model_loaded(){
    console.log("model loaded");
    status=true;
}
function draw(){
    image(video,0,0,480,380);
}