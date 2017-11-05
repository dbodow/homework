document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,0,200)';
  ctx.fillRect(10,10,55,50);

  ctx.beginPath();
  ctx.arc(150, 150, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgb(200,200,0)';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 25, 0, Math.PI, true);
  ctx.lineTo(175, 150);
  ctx.strokeStyle = 'rgb(200,100,0)';
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.closePath();
});
