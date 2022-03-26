function setup(){
   canvas= createCanvas(600, 500);
   canvas.center();
   objectdetector = ml5.objectDetector("cocossd", modelloaded);
   document.getElementById("Status").innerHTML = "Status: Detecting Objects";
   objectdetector.detect(img, gotResult);
}

function modelloaded(){
   console.log("model is loaded");
}

function gotResult(error,results){
  if(error){
     console.error(error);
  }
  else{
     console.log(results);
  }
}

function preload(){
 image1 = loadImage("dog_cat.jpg");
}

function draw(){
 image(image1, 0, 0, 600, 500);
 fill("red");
 stroke("red");
 noFill();
 text("Dog", 45, 75);
 rect(30 ,60 ,450, 350);

 fill("yellow");
 stroke("yellow");
 noFill();
 text("cat", 45, 75);
 rect(30, 60, 250, 300);
}