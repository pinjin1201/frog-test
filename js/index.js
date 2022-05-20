$(function () {

  const $date = $('.day-date')
  const $inputBtn = $('.button-block')
  const $TripOne = $('.trip-1')
  const $TripTwo = $('.trip-2')
  const $TripThree = $('.trip-3')

  // Date
  let time = new Date()

  function getCompleteData(data) {
    if (String(data).length === 1) {
      return data = `0${data}`
    } else {
      return data
    }
  }

  let year = time.getFullYear()
  let month = Number(time.getMonth()) + 1
  let day = time.getDate()
  year = getCompleteData(year)
  month = getCompleteData(month)
  day = getCompleteData(day)

  let nowDate = `${year}-${month}-${day}`
  $date.text(nowDate)


  // Btn
  $inputBtn.slideDown().show().css({
    'display': 'flex',
  })


  // Image
  // --- screen width > 800 px
  if (screen.width > 800) {
    $TripOne.css({ 'margin-left': '-=200' }).show().animate({
      marginLeft: '+=200'
    }, 1500)
    $TripTwo.css({ 'margin-top': '+=100' }).show().animate({
      marginTop: '-=100'
    }, 1500)
    $TripThree.css({ 'margin-right': '-=200' }).show().animate({
      marginRight: '+=200'
    }, 1500)
  }
  // --- screen width 600 px ~ 800 px
  if (screen.width >= 600 && screen.width <= 800) {
    $TripOne.css({ 'margin-right': '+=70' }).show().animate({
      marginRight: '-=70'
    }, 1500)
    $TripTwo.css({ 'margin-left': '+=70' }).show().animate({
      marginLeft: '-=70'
    }, 1500)
    $TripThree.css({ 'margin-top': '+=70' }).show().animate({
      marginTop: '-=70'
    }, 1500)
  }
  // --- screen width < 600 px
  if (screen.width < 600) {
    $TripOne.css({ 'margin-left': '+=100' }).show().animate({
      marginLeft: '-=100'
    }, 1500)
    $TripTwo.css({ 'margin-left': '-=100' }).show().animate({
      marginLeft: '+=100'
    }, 1500)
    $TripThree.css({ 'margin-left': '+=100' }).show().animate({
      marginLeft: '-=100'
    }, 1500)
  }

})


