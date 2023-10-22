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
    let digitToString = value;
    return ("0" + digitToString.toString()).slice(-2);
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)


    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;

    // ... your code goes here
  }

  split() {
    

    // ... your code goes here
  }
}
