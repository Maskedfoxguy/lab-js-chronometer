class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {

   this.intervalId = setInterval(() => {
   this.currentTime = this.currentTime + 1;
    if(printTimeCallback) {
      printTimeCallback()
    }
   }, 1000)
   
  }
  
  getMinutes() {
    let minutes =  Math.floor(this.currentTime / 60)
    return minutes;
    // ... your code goes here
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let digitToString = value
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
