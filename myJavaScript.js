xOf1Arm = 0
xOf2Arm = 0
diff = 0

function setup(){
    vide = createCapture(VIDEO)
    vide.size(1000, 733)
    vide.position(100, 150)

    canve = createCanvas(1000, 733)
    canve.position(1200, 150)

    possum = ml5.poseNet(vide, IAmNotInTheMood)
    possum.on("pose", IGotYourPosesComeAndCatchMe)
}
function draw(){
    document.getElementById("size").innerHTML = diff

    background("#FFA500")
    textSize(diff)
    fill("#000000")
    text("Edison", xOf1Arm, xOf2Arm)
}

function IAmNotInTheMood(){
    console.warn("Go away, or else bad things will come for you... just saying :o")
}

function IGotYourPosesComeAndCatchMe(results){
    if(results.length > 0){
        xOf1Arm = results[0].pose.leftWrist.x
        xOf2Arm = results[0].pose.rightWrist.x
        diff = Math.floor(xOf1Arm - xOf2Arm)
    }
}