// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(string) {
    // change this so it works
    // .toUpperCase() is a built-in function
    return string.toUpperCase() + "!!!!!"
  }

  var theMostAwesomeFood = "tacos"
  var otherFood = "pizza"

  window.alert(yell(theMostAwesomeFood))
  window.alert(yell(otherFood))

})
