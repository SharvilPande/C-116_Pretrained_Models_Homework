mustacheX = "";
mustacheY = "";

function preload() {
    mustache_image = loadImage("https://i.postimg.cc/FFShJS6n/mustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("Mustache X = "+mustacheX);
        console.log("Mustache Y = "+mustacheY);  
    }          
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache_image, mustacheX-30, mustacheY+3, 60, 30);
}

function take_snapshot() {
    save('filtered_image.png');
}


