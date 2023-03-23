const wrapper = document.querySelector('.progress-bar-wrapper')
const progressBarContainer = document.createElement('div')
const progressBar = document.createElement('div')
const controlButton = document.createElement('button')
const buttonText = document.createTextNode("stop")
const progressValue = document.createElement('h1')
let barWidth = 0
let isLoad = true

progressBarContainer.className = "progress-bar-container"
progressBar.className = "progress-bar"
controlButton.className = "progress-bar-btn"
progressValue.className = "progress-bar-value"

controlButton.appendChild(buttonText)
progressBarContainer.append(progressBar)
wrapper.append(progressValue)
wrapper.append(progressBarContainer)
wrapper.append(controlButton)

function progress(e) {
    e.preventDefault()
    startStopLoading()
}

function startStopLoading() {
    const progressBarInterval = setInterval(() => {
        if (barWidth < 100 && isLoad) {
            barWidth++
            progressBar.style.width = barWidth + '%';
            progressValue.textContent = barWidth + '%'
        }
        else {
            clearInterval(progressBarInterval)
        }
    }, 100)
}

function buttonHadler(e) {
    if (isLoad === true) {
        controlButton.textContent = 'start'
        isLoad = false
    }
    else {
        controlButton.textContent = 'stop'
        isLoad = true
    }
    startStopLoading()
}


window.onload = (event) => progress(event)
controlButton.onclick = (event) => buttonHadler(event)