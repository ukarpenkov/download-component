const wrapper = document.querySelector('.progress-bar-wrapper')
const progressBarContainer = document.createElement('div')
const progressBar = document.createElement('div')
const controlButton = document.createElement('button')
const stopButton = document.createElement('button')
const buttonText = document.createTextNode("start")
const stopButtonText = document.createTextNode("stop")
const progressValue = document.createElement('h1')
let barWidth = 0
let isLoad = true

progressBarContainer.className = "progress-bar-container"
progressBar.className = "progress-bar"
controlButton.className = "progress-bar-btn"
stopButton.className = "progress-bar-btn"
progressValue.className = "progress-bar-value"

controlButton.appendChild(buttonText)
stopButton.appendChild(stopButtonText)
progressBarContainer.append(progressBar)
wrapper.append(progressValue)
wrapper.append(progressBarContainer)
wrapper.append(controlButton)
wrapper.append(stopButton)

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
    }, 10)
}

function stopButtonHadler(e) {
    if (barWidth === 100) {
        barWidth = 0
        isLoad = true
        startStopLoading()
    }

    if (isLoad === true) {
        return
    }

    isLoad = true
    startStopLoading()
}
function startButtonHadler(e) {
    isLoad = false
    startStopLoading()
}


window.onload = (event) => progress(event)
controlButton.onclick = (event) => stopButtonHadler(event)
stopButton.onclick = (event) => startButtonHadler(event)