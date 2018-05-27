document.addEventListener('DOMContentLoaded',function(){
    myCanvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    window.setInterval(game, 1000/20);
    window.addEventListener('keydown', pushKey);
});

cheight = cwidth = 500;
t = 20;
px = py = 10*t;
vx = vy = 0;
ax = ay = 0;

function game(){
    console.log("one");
    px += vx*t;
    py += vy*t;

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cwidth,cheight);

    ctx.fillStyle = 'green';
    ctx.fillRect(px,py,20,20);
}

function createApple(){
    ax = t*(Math.random(25));
    ay = t*(Math.random(25));
}

function pushKey(evt){
    switch(evt.keyCode){
        case 37:
        vx = -1; vy = 0;
        break;
        case 38:
        vx = 0; vy = -1;
        break;
        case 39:
        vx = 1; vy = 0;
        break;
        case 40:
        vx = 0; vy = 1;
        break;
    }
}