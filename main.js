function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	gameover = loadSound("gameover.wav")
	enemy_kick = loadSound("kick.wav")
	mario_dies = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video= createCapture(VIDEO)
	video.size(800,400)
	video.parent("gaming_console")
	posenet= ml5.poseNet(video, modelLoaded)
	posenet.on("pose", gotPoses)
}

function gotPoses(result){
	if (result.length>0) {
		console.log(result)
		NX= result[0].pose.nose.x
		NY= result[0].pose.nose.y
		console.log(NX)
		console.log(NY)
	}
}

function modelLoaded(){
	console.log("Your Model is Loaded Successfully")
}

function draw(){
	game()
}






