window.onload = function(){
  var buttonOne = document.getElementById('stopButton')
  buttonOne.addEventListener("click", function(){
    var bulbOne = document.getElementById('stopLight')
    for (var i = 0; i < bulbOne.classList.length; i++) {
      if (bulbOne.classList[i] == "stop") {
        return bulbOne.classList.remove("stop")
      }
    }
    bulbOne.classList.add("stop")
  })
  var buttonTwo = document.getElementById('slowButton')
  buttonTwo.addEventListener("click", function(){
    var bulbTwo = document.getElementById('slowLight')
    for (var i = 0; i < bulbTwo.classList.length; i++) {
        if (bulbTwo.classList[i] == "slow") {
          return bulbTwo.classList.remove("slow")
        }
      }
    bulbTwo.classList.add("slow")
  })
  var buttonThree = document.getElementById('goButton')
  buttonThree.addEventListener("click", function(){
    var bulbThree = document.getElementById('goLight')
    for (var i = 0; i < bulbThree.classList.length; i++) {
      if (bulbThree.classList[i] == "go") {
        return bulbThree.classList.remove("go")
      }
    }
    bulbThree.classList.add("go")
  })
}
