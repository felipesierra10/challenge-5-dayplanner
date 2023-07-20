
$(function () {

  var currentDayEl = $("#currentDay")
  var currentDayTime = dayjs().format("dddd, MMMM, D")
  var saveBtn = $(".saveBtn")
  console.log(currentDayTime)

  currentDayEl.text(currentDayTime)

  var currentHour = dayjs().hour()

  console.log(currentHour)


  for (let i = 9; i < 18; i++) {
    var timeBlock = $("#hour-" + i)
    var event = localStorage.getItem("hour-" + i)

    console.log(event)

    if (i === currentHour) {

      timeBlock.addClass("present")

    }
    else if (currentHour > i) {
      timeBlock.addClass("past")
    }
    else {
      timeBlock.addClass("future")
    }
  }






  function saveEvent(event) {
    event.preventDefault()
    var currentButton = $(this)
    var textArea = currentButton.siblings("textarea")
    var parentId = currentButton.parent().attr("id")
    console.log(textArea.val() + " " + parentId)

    localStorage.setItem(parentId, textArea.val())

  }
  saveBtn.on("click", saveEvent)
});

