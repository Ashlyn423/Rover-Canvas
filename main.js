var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

MarsImageArray = ["https://content.presspage.com/uploads/1979/1920_190327-mars-sample-return-banner-149413.jpg?10000",
"https://mars.nasa.gov/system/downloadable_items/40047_PIA02406.jpg",
"https://www.masslive.com/resizer/OcLl_7SlOVQIt_dOH0C5pUS8pmw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.masslive.com/home/mass-media/width2048/img/living_impact/photo/mars-rovers-1f89148266753a74.jpg",
"https://tse4.mm.bing.net/th?id=OIP.EhNibrWFG_ySA3P4xBUSHwHaEK&pid=Api&P=0&w=292&h=164"]
randomnumber = Math.floor(Math.random()*4)
console.log(randomnumber)
rover_width = 100
rover_height = 100
backgroundimage = MarsImageArray[randomnumber]
roverimage = "rover.png"
roverx = 10
rovery = 10
var background_imgTag, rover_imgTag

function add(){
    background_imgTag = new Image()
    background_imgTag.onload = uploadbackground
    background_imgTag.src = backgroundimage;

    rover_imgTag = new Image()
    rover_imgTag.onload = uploadrover
    rover_imgTag.src = roverimage;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, roverx, rovery, rover_width, rover_height)
} 

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed)

if (keyPressed == '38') {
    up()
    console.log("up")
}

if (keyPressed == '40') {
    down()
    console.log("down")
}

if (keyPressed == '37') {
    left()
    console.log("left")
}

if (keyPressed == '39') {
    right()
    console.log("right")
}
}

function left(){
    if (roverx > 0) {
        roverx = roverx - 10
        console.log(roverx, rovery)
        uploadbackground()
        uploadrover()
    }

}

function right(){
    if (roverx < 800) {
        roverx = roverx + 10
        console.log(roverx, rovery)
        uploadbackground()
        uploadrover()
    }

}

function up(){
    if (rovery > 0) {
        rovery = rovery - 10
        console.log(roverx, rovery)
        uploadbackground()
        uploadrover()
    }

}

function down(){
    if (rovery > 600) {
        rovery = rovery + 10
        console.log(roverx, rovery)
        uploadbackground()
        uploadrover()
    }

}