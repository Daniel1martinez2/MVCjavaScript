class ScreenInitView {
    constructor(posX,posY,w,h){
        this.posX = posX;
        this.posY = posY;
        this.w = w;
        this.h = h;
        this.screenInitController = new ScreenInitiController();
    }

    drawBall(){
        ellipse(this.posX,this.posY,this.w,this.h);
    }

}x