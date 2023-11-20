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
  $("#line-progress").css("width", "20%");
  $(".section-content-2").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "40%");
  $(".section-content-3").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "60%");
  $(".section-content-4").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "80%");
  $(".section-content-5").addClass("active").siblings().removeClass("active");
});

$(".step06").click(function () {
  $("#line-progress").css("width", "100%");
  $(".section-content-6").addClass("active").siblings().removeClass("active");
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

var ytSubscribersCount;


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

var yt_counter = 0;

var ytfun = function ytup() {
  if (ytSubscribersCount) {
    counter.innerHTML = ytSubscribersCount;
    clearInterval(ytfun);
  } else {
    yt_counter = yt_counter + 1;
    counter.innerHTML = yt_counter;
  }
};

var set = setInterval(ytfun, 1);

//CoDeKu

var codeku = document.getElementById("codeku-followers-count");
var codekuFollowersCount = 293;

var codeku_counter = 0;

var codekufun = function codekuup() {
  if (ytSubscribersCount) {
    
    codeku.innerHTML = codekuFollowersCount;

    clearInterval(codekufun);

  } else {
    codeku_counter = codeku_counter + 1;
    codeku.innerHTML = codeku_counter;
  }
};

var set = setInterval(codekufun, 1);



//NJ Linkedin

var njLinkedin = document.getElementById("nj-followers-count");
var njLinkedinFollowersCount = 2768;

var linkedin_counter = 0;

var linkedinfun = function linkedinup() {
  if (ytSubscribersCount) {
    
    njLinkedin.innerHTML = njLinkedinFollowersCount;

    clearInterval(linkedinfun);

  } else {
    linkedin_counter = linkedin_counter + 1;
    njLinkedin.innerHTML = linkedin_counter;
  }
};

var set = setInterval(linkedinfun, 1);



//NJ Discord
var njDiscordMembersCount = 0;

var discordRequest = new XMLHttpRequest();

discordRequest.onreadystatechange = function(){
  if(discordRequest.readyState == 4 && discordRequest.status == 200){
    var discordResponse = JSON.parse(discordRequest.responseText);
    njDiscordMembersCount = discordResponse.approximate_member_count; //approximate_presence_count
  }
  else{
    console.log(discordRequest.status);
  }
}

discordRequest.open("GET", "https://discord.com/api/v9/invites/mTGpeMQf?with_counts=true&with_expiration=false", true);

discordRequest.send();

var njDiscord = document.getElementById("nj-members-count");

var discord_counter = 0;

var discordfun = function discordup() {
  if (njDiscordMembersCount > 0) {
    
    
    njDiscord.innerHTML = njDiscordMembersCount;

    clearInterval(discordfun);

  } else {
    discord_counter = discord_counter + 1;
    njDiscord.innerHTML = discord_counter;
  }
};

var set = setInterval(discordfun, 1);


//All Folowers

var allFollowers = document.getElementById("all-followers");
var j = 0;

var af = function allup() {
  if (ytSubscribersCount) {
    
    var allFollowersCount =
    ytSubscribersCount +
    njDiscordMembersCount;
    allFollowers.innerHTML = allFollowersCount;

    clearInterval(af);

  } else {
    j = j + 1;
    allFollowers.innerHTML = j;
  }
};

var set = setInterval(af, 1);




//Visitors Counter

var uniqueVistorsToday = document.getElementById("uvt");
var viewsToday = document.getElementById("vt");


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

/*https://api.counterapi.dev/v1/NimeshaJinarajadasaGithubIo/pageViewsCount/set?count=1*/



