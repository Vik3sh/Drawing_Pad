const canvas=document.querySelector("#canvas");
const colorPik=document.querySelector("#color");
const ctx = canvas.getContext("2d");
const size=document.querySelector("#rangeSelect");
const clear=document.querySelector("#clear");
let isDrawing=false;




canvas.addEventListener("mousedown", (event)=>{
    isDrawing=true;
    
   
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);

});
colorPik.addEventListener("input",()=>{
    ctx.strokeStyle=colorPik.value;
})
size.addEventListener("input",()=>{
     ctx.lineWidth=Number(size.value);
})
clear.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width , canvas.height );
});

colorPik.addEventListener("input",()=>{
    ctx.strokeStyle = colorPik.value ;
});

canvas.addEventListener("mousemove", (e)=>{
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
});
canvas.addEventListener("mouseup", ()=>isDrawing=false)
canvas.addEventListener("mouseleave",()=> isDrawing=false)