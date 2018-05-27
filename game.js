document.addEventListener('DOMContentLoaded',function(){
    myCanvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    window.setInterval(game, 1000/10);
    window.addEventListener('keydown', pushKey);
});

cheight = cwidth = 500;
t = 20;
px = py = 10*t;
vx = vy = 0;
ax = ay = 0;
size = 5;
tail = []

createApple();
function game(){
    px += vx*t;
    py += vy*t;

    if( px < 0){
        px = 24*t;
    }
    if( px > cwidth){
        px = 0*t;
    }
    if( py > cheight) {
        py = 0*t;
    }
    if( py < 0) {
        py = 24*t;
    }

    if(px == ax && py == ay){
        console.log("jablko"+size);
        size++;
        createApple();
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cwidth,cheight);

    ctx.fillStyle = 'green';
    ctx.fillRect(px+1,py+1,20-2,20-2);
    
    for(var i = 0;i < tail.length;i++){
        ctx.fillStyle = 'green';
        ctx.fillRect(tail[i].x+1,tail[i].y+1,20-2,20-2);
        if(tail[i].x == px && tail[i].y == py){
            size = 5;
        }
    }
    tail.push({x: px, y: py});
    if(tail.length > size){
        tail.shift();
    }

    ctx.fillStyle = 'orange';
    ctx.fillRect(ax+1,ay+1,20-2,20-2);
}

function createApple(){
    ax = t*(Math.floor((Math.random() * 25) + 0));
    ay = t*(Math.floor((Math.random() * 25) + 0));
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