nosex=0
nosey=0

function setup(){
    canvas= createCanvas(400,400)
    canvas.position(450,150)
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded)
  poseNet.on("pose",gotresult)
}
function preload(){
    moustache=loadImage("https://th.bing.com/th/id/R.96428dd7f0ad3c7369d1ef1f04104892?rik=Yge0fvSn2Pe4VA&riu=http%3a%2f%2fwww.downloadclipart.net%2fmedium%2f43176-mustache-no-background-cool-images.png&ehk=e2NfUIebqDBdktRcTR6llpo2nJdsNXmLPZrhgDrIgP8%3d&risl=&pid=ImgRaw&r=0")
}
function draw(){
    image(video,0,0,400,400)
    image(moustache,nosex-20,nosey+7,50,20)
}

function takesnapshot(){
    save("my_filter.jpg")
}

function modelLoaded(){
    console.log("The model is ready")
}

function gotresult(result){
    if(result.length>0){
        console.log("the model is working")
        console.log(result)
       nosex = result[0].pose.nose.x
       console.log("nose x="+nosex)
       nosey=result[0].pose.nose.y
       console.log("nose y ="+nosey)
    }
}
