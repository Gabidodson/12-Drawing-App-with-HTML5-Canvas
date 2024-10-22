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

//Implement Shape Drawing Logic
function drawLine(x,y) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x,y);
    ctx.stroke();
}
function drawRectangle(x,y) {
    ctx.beginPath();
    const width = x - startX;
    const height = y - startY;
    ctx.rectangle(startX, startY, width, height);
    ctx.stroke();
}
function drawCircle(x,y) {
    ctx.beginPath()
    const radius = Math.sqrt(Math.pow(x-startX,2)+Math.pow(y-startY,2));
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
function draw(e) {
    if (!isDrawing) return;
    const tool = getSelectedTool();
    const color = document.getElementById('colorPicker').value;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    switch (tool) {
        case 'line':
            drawLine(e.offsetX,e.offsetY);
            break;
            case 'rectangle':
                drawRectangle(e.offsetX, e.offsetY);
                break;
                case 'circle':
                    drawCircle(e.offsetX, e.offsetY);
                    break;
    }

}