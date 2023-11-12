//Navbar active state stylings
$(document).ready(function () {
  $(".nav").click(function () {
    $("a").removeClass("active");
    $(".contact-btn").removeClass("active");

    $(this).addClass("active");
  });
});

//Resume Finctionality

$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".section-content-1").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "16.6%");
  $(".section-content-2").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "33.2%");
  $(".section-content-3").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "49.8%");
  $(".section-content-4").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "66.46%");
  $(".section-content-5").addClass("active").siblings().removeClass("active");
});

$(".step06").click(function () {
  $("#line-progress").css("width", "83%");
  $(".section-content-6").addClass("active").siblings().removeClass("active");
});

$(".step07").click(function () {
  $("#line-progress").css("width", "100%");
  $(".section-content-7").addClass("active").siblings().removeClass("active");
});

//Event Count Down

var eventDate = new Date("Nov 19, 2023 18:00:00").getTime();

var counter = setInterval(function () {
  var dateTimeNow = new Date().getTime();
  var range = eventDate - dateTimeNow;

  var days = Math.floor(range / (1000 * 60 * 60 * 24));
  var hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((range % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (range < 0) {
    clearInterval(counter);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

//Social Media Statistics

//YouTube
const YTAPIKey = "AIzaSyATFcx9i93hcMuwXStS9S3gSpqGWby0Jcg";
const ytchannelId = "UCN4fELPxNvqoYlcfmgqlzCw";
const subscriberCount = document.getElementById("yt-sub-count");

var ytSubscribersCount = 355;

let getdata = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytchannelId}&key=${YTAPIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ytSubscribersCount = parseInt(
        data["items"][0].statistics.subscriberCount
      );
    });
};

getdata();

var counter = document.getElementById("yt-sub-count");

var i = 0;

var sub = function up() {
  if (ytSubscribersCount == i) {
    clearInterval(sub);
  } else {
    i = i + 1;
    counter.innerHTML = i;
  }
};

var set = setInterval(sub, 1);

//CoDeKu

var codeku = document.getElementById("codeku-followers-count");
var codekuFollowersCount = 230;
codeku.innerHTML = codekuFollowersCount;

//NJ Linkedin

var njLinkedin = document.getElementById("nj-followers-count");
var njLinkedinFollowersCount = 2703;
njLinkedin.innerHTML = njLinkedinFollowersCount;

//NJ Discord

var njDiscord = document.getElementById("nj-members-count");
var njDiscordMembersCount = 0;
njDiscord.innerHTML = njDiscordMembersCount;

//All Folowers

var allFollowers = document.getElementById("all-followers");
var allFollowersCount =
  ytSubscribersCount +
  codekuFollowersCount +
  njLinkedinFollowersCount +
  njDiscordMembersCount;
allFollowers.innerHTML = allFollowersCount;

//Visitors Counter

var uniqueVistorsToday = document.getElementById("uvt");
var viewsToday = document.getElementById("vt");

var uniqueVistorsThisWeek = document.getElementById("uvtw");
var viewsThisWeek = document.getElementById("vtw");

var uniqueVistorsThisMonth = document.getElementById("uvtm");
var viewsThisMonth = document.getElementById("vtm");

visitorCountUpdater();

function visitorCountUpdater() {
  if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", 1);

    var uniqueCounterRequest = new XMLHttpRequest();

    uniqueCounterRequest.onreadystatechange = function () {
      if (
        uniqueCounterRequest.readyState == 4 &&
        uniqueCounterRequest.status == 200
      ) {
        var uvc = JSON.parse(uniqueCounterRequest.responseText);

        console.log(uvc.count);
        uniqueVistorsToday.innerHTML = uvc.count;

        var viewsCounterRequest = new XMLHttpRequest();

        viewsCounterRequest.onreadystatechange = function () {
          if (
            viewsCounterRequest.readyState == 4 &&
            viewsCounterRequest.status == 200
          ) {
            var pv = JSON.parse(viewsCounterRequest.responseText);

            console.log(pv.count);
            viewsToday.innerHTML = pv.count;
          } else {
            console.log(viewsCounterRequest.status);
          }
        };

        viewsCounterRequest.open(
          "GET",
          "https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/pageViewsCount/up"
        );

        viewsCounterRequest.send();
      } else {
        console.log(uniqueCounterRequest.status);
      }
    };

    uniqueCounterRequest.open(
      "GET",
      "https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/uniqueVisitorsCount/up"
    );

    uniqueCounterRequest.send();
  } else {
    var viewsCounterRequest = new XMLHttpRequest();

    viewsCounterRequest.onreadystatechange = function () {
      if (
        viewsCounterRequest.readyState == 4 &&
        viewsCounterRequest.status == 200
      ) {
        var pv = JSON.parse(viewsCounterRequest.responseText);

        console.log(pv.count);
        viewsToday.innerHTML = pv.count;
      } else {
        console.log(viewsCounterRequest.status);
      }
    };

    viewsCounterRequest.open(
      "GET",
      "https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/pageViewsCount/up"
    );

    viewsCounterRequest.send();
  }

  var uniqueCounterRequest = new XMLHttpRequest();

  uniqueCounterRequest.onreadystatechange = function () {
    if (
      uniqueCounterRequest.readyState == 4 &&
      uniqueCounterRequest.status == 200
    ) {
      var uvc = JSON.parse(uniqueCounterRequest.responseText);

      console.log(uvc.count);
      uniqueVistorsToday.innerHTML = uvc.count;

      
    }
  };

  uniqueCounterRequest.open(
    "GET",
    "https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/uniqueVisitorsCount/"
  );

  uniqueCounterRequest.send();
}

//Reset Couners

/*https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/uniqueVisitorsCount/set?count=1*/
