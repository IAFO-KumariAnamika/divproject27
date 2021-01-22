class Roof{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);  

    
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop();
            
        }
}
    
