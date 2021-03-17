// detects when buttons are pressed and activates the coresponding code
document.getElementById('cimage').addEventListener('click', image)
document.getElementById('ctext').addEventListener('click', text)
document.getElementById('stext').addEventListener('click', show)
document.getElementById('htext').addEventListener('click', hide)
document.getElementById('cbg').addEventListener('click', bg)

// changes the image
function image () {
  document.getElementById('image').src = 'images/omega.png'
}
// changes text
function text () {
  document.getElementById('text').innerHTML = 'this text has been changed'
}
// shows the text
function show () {
  document.getElementById('text').style.display = 'block'
}
// hides the text
function hide () {
  document.getElementById('text').style.display = 'none'
}
// changes the backgroung
function bg () {
  document.body.style.backgroundColor = 'blue'
}
