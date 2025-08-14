const footerelem = document.getElementById("copy-year")
const date = new Date()
footerelem.innerText = date.getFullYear()


const initApp = ()=>{
  const burgerBtnElem = document.getElementById('burger-btn')
  const mobileMenuElem =  document.getElementById('mobile-menu')

  const togglemenu = ()=>{
    mobileMenuElem.classList.toggle('hidden')
    mobileMenuElem.classList.toggle('flex')
    burgerBtnElem.classList.toggle('toggleBtn')
  }
  burgerBtnElem.addEventListener('click', togglemenu)
  mobileMenuElem.addEventListener('click', togglemenu)

}
document.addEventListener('DOMContentLoaded', initApp)