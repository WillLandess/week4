// This code runs when the page loads
$(function() {

  $(".listitems").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()
    //console.log(elementThatWasClicked)
    // remove the element
  })

})
