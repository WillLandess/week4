// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    // Do something
    //prevent it from going to google (override the default behavior)
    event.preventDefault()
    //$("#unicorn").show()
    //$("#unicorn").toggle()
    $("#unicorn").slideDown(1000)
  })

})
