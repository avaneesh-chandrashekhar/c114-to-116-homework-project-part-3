

mustacheX=0;
mustacheY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/0yH3J7C6/handlebar-mustache-png.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot() {
    save('my mustache Filter Image.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.mustache.x -15;
        noseY = results[0].pose.mustache.y -15;
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
        
    }
    }
