var theater = theaterJS()

theater
.on('type:start, erase:start', function () {
  theater.getCurrentActor().$element.classList.add('actor__content--typing')
})
.on('type:end, erase:end', function () {
  theater.getCurrentActor().$element.classList.remove('actor__content--typing')
})
.on('type:start, erase:start', function () {
  if (theater.getCurrentActor().name === 'tlx') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

theater
.addActor('tlx', { speed: 0.8, accuracy: 0.6 })
.addActor('hyh')
.addScene('tlx: APARNA', 500)
.addScene('hyh: I LOVE YOU', 500)
.addScene('tlx: APPU', 500)
.addScene('hyh: MARRY ME ?', 500)
.addScene('hyh: U Will Be Happy Rest Of Your Life', 100)
.addScene('tlx: BEY', 500)
.addScene('hyh: Be With ME', 500)
.addScene('hyh: Dont make my Heart Empty Without You', 500)
.addScene('hyh: Lets End Our Lifes Like King & Queen', 100)
.addScene(theater.replay.bind(theater))


// timer
var timer;

var loveDate = new Date("2022/05/30 21:00:00");

timer = setInterval(function() {
  timeBetweenDates(loveDate);
}, 1000);

function timeBetweenDates(loveDate) {
  var now = new Date();
  var difference = now.getTime() - loveDate.getTime();

  if (difference <= 0) {
    // Timer done
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = PrefixInteger(hours, 2);
    minutes = PrefixInteger(minutes, 2);
    seconds = PrefixInteger(seconds, 2);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

function PrefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}
