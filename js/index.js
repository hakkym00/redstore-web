// Nav Bar Event

const navBar = () => {
    const menuBar = document.querySelector('#menu')
    if (menuBar.style.maxHeight == "0px") {
        menuBar.style.maxHeight = '300px';
      } else {
        menuBar.style.maxHeight = '0px';
      }

}

//Change image

const changeImage =  (img) => {
  const clickedImage = img.src
  const mainImage = document.querySelector('#mainImage')
  mainImage.src = clickedImage
}

//copyright year
document.getElementById('year').innerHTML = new Date().getFullYear()

//Toggle login/ reg form

const toggleLoginForm =() => {
  const loginForm = document.querySelector('#loginForm')
  const regForm = document.querySelector('#registerForm')
  const indicator = document.querySelector('.indicator')
  loginForm.style.transform = 'translateX(0px)'
  regForm.style.transform = 'translateX(300px)'
  indicator.style.transform = 'translateX(0px)'

}

const toggleRegForm = () => {
  const loginForm = document.querySelector('#loginForm')
  const regForm = document.querySelector('#registerForm')
  const indicator = document.querySelector('.indicator')
  loginForm.style.transform = 'translateX(-300px)'
  regForm.style.transform = 'translateX(0)'
  indicator.style.transform = 'translateX(70px)'
}












