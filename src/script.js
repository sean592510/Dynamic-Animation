var s = Sketch.create({autoclear: false});
var particles = [];
var max = 120;
var clearColor ="rgba(0,14,21,.03)";
var hue =20;

function P(){}

P.prototype = {
  constructor: P,
  init: function(){
    this.r = random(-11) + 70;
    this.x = s.width/2;
    this.y = s.height/2;
    this.vx = random(-5, 5);
    this.vy = random(-2, 2);
    this.color = "hsla("+hue+", 100%, 40%, .05)";
    this.life = 0.004;
    this.maxLife = random(650);
  },
  draw: function(){
    s.strokeStyle = this.color;
    s.beginPath();
    s.globalCompositeOperation = "lighter";
    s.arc(this.x, this.y, this.r*1.9, 0, TWO_PI);
		s.stroke();
    this.update();
  },
  update: function(){
    this.x += this.vx;
    this.y += this.vy*-2;
    this.life++;
    if(this.life >= this.maxLife || this.r <= 0.05){
      this.init();
    }
  }
};


s.setup = function(){
  for(var i=10; i<max; i++){
    setTimeout(function(){
      var p = new P();
      p.init();
    	  particles.push(p)
    }, i *2);
  }
};

s.update = function(){
  s.fillStyle = clearColor;
  s.globalCompositeOperation = "source-over";
  s.fillRect(0,0,s.width,s.height*1);
  hue += 0.07;
};

s.draw = function(){
  for(var i in particles){
    particles[i].draw();
  }
};


var svg = Snap("#paper");
var circ = svg.circle(7,9,8.2)
  .attr({fill:"rgba(0,0,0,.2)"})
  .pattern(0,0,30,40)
  .attr({patternTransform: "rotate(40)"});
svg.rect(0,0,'100%','100%').attr({fill: circ});
