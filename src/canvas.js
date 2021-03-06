document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

var canvas = document.querySelector('canvas');

//Canvas is just a tad bit to large on the right side, causing a side scroll bar to appear at the bottom of the screen.
//This fix is going to have to wait a while, going to attempt to add the nav bar to the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;

var colorArray = [
    '#FDFD96',
    "#FFD1DC",
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
        {
            this.dx = -this.dx;
        }

        if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
        {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)
        {
            if(this.radius < maxRadius)
            {
                this.radius += 1;
            }
        } else if(this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();

        }
}

var circleArray = [];

function init() {

    circleArray = [];

    for(var i = 0; i < 400; i++)
    {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 8;
        var dy = (Math.random() - 0.5) * 8;
        circleArray.push(new Circle(x , y, dx, dy, radius));
        //console.log(circleArray);
    }
}

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for(var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].update();
    }

    //SOLVED
    //Text will not center inside of the canvasd element
    //1920x942
    //Dividing both the with/2 and entering actal divided numbers does not produce a change in the texts settting.
    //setting location at 10, 50 shows good possible placement for the menu bar that will be added to the page
    //For some reason setting it to 620,460 made the text center even though that is no where from half of the canvas
    //SOLVED

    c.font = "100px Arial";
    c.strokeText = 'white';
    var textString = "ZED PROJECT", textWidth = c.measureText(textString).width;
    c.fillText(textString, (canvas.width/2) - (textWidth/2), 450);
}
init();
animate();

}