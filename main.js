canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d");

colour="red";


ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=2;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(350,200,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(450,200,40,0,2*Math.PI);
ctx.stroke();


function circle(mouse_x,mouse_y)
{
    console.log("helo");
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}