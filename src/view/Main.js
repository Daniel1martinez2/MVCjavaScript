let screen;
let screenInitView;

function setup(){
    createCanvas(640, 480);
    screen  = 0;
    screenInitView = new ScreenInitView(250,250,50,50);
}

function draw(){
    background(0);

    switch (screen) {
        case 0:
            screenInitView.drawBall();
            break;
    
        default:
            break;
    }
}