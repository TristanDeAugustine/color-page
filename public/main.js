const main = () => {}

const colorChange = () => {
  let rgbColor
  red = Math.floor(Math.random() * 250)
  green = Math.floor(Math.random() * 250)
  blue = Math.floor(Math.random() * 250)

  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
  document.body.style.background = rgbColor

  red = ('0' + red.toString(16)).substr(-2).toUpperCase()
  green = ('0' + green.toString(16)).substr(-2).toUpperCase()
  blue = ('0' + blue.toString(16)).substr(-2).toUpperCase()

  setInterval(function() {
    colorChange('Hello')
  }, 3000)
}
colorChange()

document.addEventListener('click', colorChange)
document.addEventListener('DOMContentLoaded', main)
