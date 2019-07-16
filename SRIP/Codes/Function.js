        var canvas = document.getElementById("Cuboidcanvas");
        canvas.width = $("#division").innerWidth();
        canvas.height = $("#division").innerHeight();
        
        var g = canvas.getContext("2d");
        
        canvas.addEventListener("mousemove", function () {
           
        });
        
        var nodes = [[-2,-0.1,-1], [-1.5, -0.8, 1], [-2, 0.3, -1], [-1.5, -0.4, 1],
        [1, -1, -1], [1.2, -1.6, 1], [1, -0.6, -1], [-1.9, 0, -1],[0.5,-1.4,1],[0.2,-0.75,-1],[-0.1,-1.2,1],[-0.5,-0.55,-1],[-0.8,-1,1],[-1.2,-0.35,-1],
        [1.9,-1.15,1],[-0.9,-0.3,1],[2.6,-0.65,1],[-0.2,0.25,1],[3.35,-0.15,1],[0.45,0.80,1],[0.45,1.2,1],[-0.2,0.65,1],[-0.9,0.05,1],[-1.2,0.05,-1],
        [-0.5,-0.15,-1],[0.2,-0.35,-1],[-2,0.1,-1],[-1.5,-0.6,1],[1,-0.8,-1],[-1.9,0.1,-1.15],[-1.9,0,-1.45],[-1.7,0,-1.2],[-1.8,-0.12,-1.5],[-1.5,-0.1,-1.25]
        ,[-1.65,-0.24,-1.55],[-1.3,-0.2,-1.3],[-1.5,-0.36,-1.62],[-1.15,-0.3,-1.35],[-1.35,-0.48,-1.70],[-1,-0.4,-1.4],[-1.2,-0.6,-1.76],[-0.75,-0.5,-1.45],[-1,-0.72,-1.82]];

        var edges = [[0, 1], [1, 3], [3, 2], [2, 0], [4, 5], [5, 5], [7, 7],
        [6, 4], [0, 4], [1, 5], [2, 6], [3, 3],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[19,20],[17,21],[15,22],[13,23],[11,24],[9,25],[26,27],[26,28]];
        //,[29,30],[31,32],[33,34],[35,36],[37,38],[39,40],[41,42]];
         function drawCuboid() {
             g.save();
 
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.translate(canvas.width /2, canvas.height / 2);
            g.strokeStyle = "#000000";
            g.beginPath();
 
            edges.forEach(function (edge) {
                var p1 = nodes[edge[0]];
                var p2 = nodes[edge[1]];
                 g.moveTo(p1[0], p1[1]);
                g.lineTo(p2[0], p2[1]);
            });
            g.stroke();
            
            g.restore();
        }

         drawCuboid();
        function scale(factor0, factor1, factor2) {
            nodes.forEach(function (node) {
                node[0] *= factor0;
                node[1] *= factor1;
                node[2] *= factor2;
            });
        }
 
        function rotateCuboid(angleX, angleY) {
 
            var sinX = Math.sin(angleX);
            var cosX = Math.cos(angleX);
 
            var sinY = Math.sin(angleY);
            var cosY = Math.cos(angleY);
 
            nodes.forEach(function (node) {
                var x = node[0];
                var y = node[1];
                var z = node[2];
 
                node[0] = x * cosX - z * sinX;
                node[2] = z * cosX + x * sinX;
 
                z = node[2];
 
                node[1] = y * cosY - z * sinY;
                node[2] = z * cosY + y * sinY;
            });
        }
 
        
       scale(70, 100, 140);
    rotateCuboid(Math.PI / 5, Math.PI / 9);
    function load()
    {
        var canva = document.getElementById("Cuboidcanvas");
        var g1=canva.getContext("2d");
        g1.clearRect(10, 10, 400, 440);
        drawCuboid();
      var string="<b>All Sides Fixed</b>";
    document.getElementById("Clicked").innerHTML=string;
    var canvas = document.getElementById("canvasforball");
        ctx = canvas.getContext("2d");
       canvas.height=400;
        var x = 180;
        var y = 20;
        var dx = 2;
        var dy = 1;

        function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI*2);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        }

        function draw() {
        ctx.clearRect(0, 0, 500, 700);
        drawBall();
        if(y===240)
            return;
        y += dy;
        }

setInterval(draw,3);
    }
    document.getElementById("b1").addEventListener("click",load);