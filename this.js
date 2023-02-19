document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-function").addEventListener("click", printThis)
  document.getElementById("btn-anonymous").addEventListener("click", () => printThis())
  document.getElementById("btn-event").addEventListener("click", (event) => printThis(event))
});

function printThis(event) {
  console.log(`this is ${this}`)
  console.log(`event.target is ${event.target}`)
}