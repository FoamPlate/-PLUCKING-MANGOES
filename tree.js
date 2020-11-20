class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

    }
    display()
	{
			
			var posRight=this.rightWallBody.position;


			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
            image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
			
	}

}