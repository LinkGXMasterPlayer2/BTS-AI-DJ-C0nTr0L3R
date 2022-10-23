song1 = "";
song2 = "";

function preload(){

    song1 = loadSound("ytmp3free.cc_bts-dynamite-8d-use-headphone-youtubemp3free.org.mp3");
    song2 = loadSound("ytmp3free.cc_bts-butter-8d-audio-youtubemp3free.org.mp3");

}


function setup(){

    canvas = createCanvas(600,500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();


}

function draw(){

    image(video,0,0,600,500);

}

function play(){

    song1.play();
    song2.play();
}

function pause(){
  mutePage();
}