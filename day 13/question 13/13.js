let timeSet = setInterval(() => {
    console.log("Loading...")
}, 1000)
setTimeout(() => {
    clearInterval(timeSet)
    console.log("Loaded successfully!")
}, 5000)