const inputElem = document.querySelector(".input");

const bodyElem = document.querySelector("body");

inputElem.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()
function updateBody(){
  if(inputElem.checked){
    bodyElem.style.background = "black";
  } else {
    bodyElem.style.background = "white";
  }
}

inputElem.addEventListener("input", ()=> {
  updateBody();
  updateLocalStorage()
})

function updateLocalStorage(){
  localStorage.setItem("mode",
    JSON.stringify(inputElem.checked)
  );
}