window.onload = function(){
  // Made the Light class to encapsulate the logic
  // buttonId, bulbId, className
  var lights = [
    new Light('stopButton', 'stopLight', 'stop'),
    new Light('slowButton', 'slowLight', 'slow'),
    new Light('goButton', 'goLight', 'go')
  ]

  // for each light in the lights array, we need to set up the
  // same thing as in the duplicated code
  lights.forEach(light => {
    var button = document.getElementById(light.buttonId)
    button.addEventListener("click", function(){
      var bulb = document.getElementById(light.bulbId)
      for (var i = 0; i < bulb.classList.length; i++) {
        if (bulb.classList[i] == light.className) {
          return bulb.classList.remove(light.className)
        }
      }
      bulb.classList.add(light.className)
    })
  })
}

class Light {
  constructor(buttonId, bulbId, className) {
    this.buttonId = buttonId
    this.bulbId = bulbId
    this.className = className
  }
}
