const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')

let textInput = document.getElementById('message')


textInput.addEventListener("keyup", function(event) {
  a1.innerHTML = event.target.value;
  a2.innerHTML = event.target.value;
})