//Configure the JavaScript for Drawing Context

//2D drawing context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let startX, startY;

function getSelectedTool(){
    return document.querySelector('input[name="tool"]:checked').value;
}
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);


function startDrawing(e){
    isDrawing = true;
    [startX, startY] = [e.offsetX, e.offsetY];
}
function draw(e) {
    if (!isDrawing) return;
    const Tool = getSelectedTool(); 
    const color = document.getElementById('colorPicker').value;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    
    switch (Tool){
        case 'line':
            drawLine(e.offsetX, e.offsetY);
            break;
        case 'rectangle':
                drawRectangle(e.offsetX, e.offsetY);
        case 'circle':
            drawCircle(e.offsetX, e.offsetY);
            break;
    }
}
function stopDrawing(){
    isDrawing = false;
}
