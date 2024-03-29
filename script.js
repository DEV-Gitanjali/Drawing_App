// this method for capture all the element

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');
// this method for size of the canvas
let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y
// this code for  mousedown eventlistener
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})
// this code for mouseup eventlistener
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
// this code for mousemove eventlistener
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})
// this code for drawcircle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
// this code for drawline
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// this method for update size screen
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

// this method for increase size 
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})
// this method for decrease size 
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})
// this method for change color  of drawing 
colorEl.addEventListener('change', (e) => color = e.target.value)
// this method help for clear the screen
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))