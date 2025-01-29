function component(width, height, color, x, y, type) {

    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    
        ctx.font = "14px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("X: " + Math.round(this.x) + " Y: " + Math.round(this.y), 10, 20);
    }
    var canvasWidth = myGameArea.canvas.width;
    var canvasHeight = myGameArea.canvas.height;
    {
        if (this.x < this.width / 2) this.x = this.width / 2; 
        if (this.x > canvasWidth - this.width / 2) this.x = canvasWidth - this.width / 2; 
        if (this.y < this.height / 2) this.y = this.height / 2; 
        if (this.y > canvasHeight - this.height / 2) this.y = canvasHeight - this.height / 2; 
    
    
    }
   
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        
       
        if (this.x < this.width / 2) this.x = this.width / 2;
        if (this.x > myGameArea.canvas.width - this.width / 2) this.x = myGameArea.canvas.width - this.width / 2;
        if (this.y < this.height / 2) this.y = this.height / 2;
        if (this.y > myGameArea.canvas.height - this.height / 2) this.y = myGameArea.canvas.height - this.height / 2;
    }
}