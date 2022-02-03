//Buttons
const easyButton = document.getElementById('easy-button')
const mediumButton = document.getElementById('medium-button')
const hardButton = document.getElementById('hard-button')


// Event Listeners
easyButton.addEventListener('click', goEasy)
mediumButton.addEventListener('click', goMedium)
hardButton.addEventListener('click', goHard)

// Easy function
function goEasy() {
    easyButton.classList.add('hide') // this function goes to easy page.
    window.document.location='easy.html'
  }
// Medium function
function goMedium() {
    mediumButton.classList.add('hide') // this function goes to medium page.
    window.document.location='med.html'
  }
// Hard function
function goHard() {
    hardButton.classList.add('hide') // this function goes to hard page.
    window.document.location='hard.html'
  }