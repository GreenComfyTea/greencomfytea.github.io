// import "web-animations-js/web-animations-next-lite.min";
const emotes = [
	"https://static-cdn.jtvnw.net/emoticons/v1/303596309/3.0", // greenc17Love
	"https://static-cdn.jtvnw.net/emoticons/v1/305688204/3.0", // greenc17Sad
	"https://static-cdn.jtvnw.net/emoticons/v1/305688193/3.0", // greenc17AYAYA
	"https://static-cdn.jtvnw.net/emoticons/v1/300587295/3.0", // hachuAYAYA
	"https://static-cdn.jtvnw.net/emoticons/v1/300587297/3.0", // hachuRage
	"https://static-cdn.jtvnw.net/emoticons/v1/300587303/3.0", // hachuLOL
	"https://static-cdn.jtvnw.net/emoticons/v1/300587308/3.0", // hachuLove
	"https://static-cdn.jtvnw.net/emoticons/v1/300587310/3.0", // hachuKB
	"https://static-cdn.jtvnw.net/emoticons/v1/300595782/3.0", // hachu1
	"https://static-cdn.jtvnw.net/emoticons/v1/300595783/3.0", // hachu2
	"https://static-cdn.jtvnw.net/emoticons/v1/300595784/3.0", // hachu3
	"https://static-cdn.jtvnw.net/emoticons/v1/300595787/3.0", // hachu4
	"https://static-cdn.jtvnw.net/emoticons/v1/300598280/3.0", // hachuFlag
	"https://static-cdn.jtvnw.net/emoticons/v1/300598281/3.0", // hachuHaM
	"https://static-cdn.jtvnw.net/emoticons/v1/300803776/3.0", // hachuMad
	"https://static-cdn.jtvnw.net/emoticons/v1/300822397/3.0", // hachuL
	"https://static-cdn.jtvnw.net/emoticons/v1/300831447/3.0", // hachuSing
	"https://static-cdn.jtvnw.net/emoticons/v1/301063663/3.0", // hachuBERRY
	"https://static-cdn.jtvnw.net/emoticons/v1/301096911/3.0", // hachuCry
	"https://static-cdn.jtvnw.net/emoticons/v1/301669944/3.0", // hachuGood
	"https://static-cdn.jtvnw.net/emoticons/v1/301669946/3.0", // hachuFail
	"https://static-cdn.jtvnw.net/emoticons/v1/301669948/3.0", // hachuPuke
	"https://static-cdn.jtvnw.net/emoticons/v1/301684866/3.0", // hachuCozy
	"https://static-cdn.jtvnw.net/emoticons/v1/301684867/3.0", // hachuDank
	"https://static-cdn.jtvnw.net/emoticons/v1/301684872/3.0", // hachuG
	"https://static-cdn.jtvnw.net/emoticons/v1/301684878/3.0", // hachuRude
	"https://static-cdn.jtvnw.net/emoticons/v1/301684880/3.0", // hachuSad
	"https://static-cdn.jtvnw.net/emoticons/v1/301684881/3.0", // hachuW
	"https://static-cdn.jtvnw.net/emoticons/v1/301684884/3.0", // hachuYup
	"https://static-cdn.jtvnw.net/emoticons/v1/302238185/3.0", // hachuStop
	"https://static-cdn.jtvnw.net/emoticons/v1/302238190/3.0", // hachuBless
	"https://static-cdn.jtvnw.net/emoticons/v1/302393461/3.0", // hachuSun
	"https://static-cdn.jtvnw.net/emoticons/v1/302393464/3.0", // hachuPause
	"https://static-cdn.jtvnw.net/emoticons/v1/302832421/3.0", // hachuHey
	"https://static-cdn.jtvnw.net/emoticons/v1/302832435/3.0", // hachuWhat
	"https://static-cdn.jtvnw.net/emoticons/v1/303588578/3.0", // hachuPat
	"https://static-cdn.jtvnw.net/emoticons/v1/304119901/3.0", // hachuOrc
	"https://static-cdn.jtvnw.net/emoticons/v1/304317368/3.0", // hachu7
	"https://static-cdn.jtvnw.net/emoticons/v1/304317372/3.0", // hachu157
	"https://static-cdn.jtvnw.net/emoticons/v1/304317385/3.0", // hachuPerbert
	"https://static-cdn.jtvnw.net/emoticons/v1/304317399/3.0", // hachuDisgust
	"https://static-cdn.jtvnw.net/emoticons/v1/304317496/3.0", // hachuDie
	"https://static-cdn.jtvnw.net/emoticons/v1/305211590/3.0", // hachuMart
	"https://static-cdn.jtvnw.net/emoticons/v1/305892618/3.0", // hachuS
	"https://static-cdn.jtvnw.net/emoticons/v1/305892659/3.0", // hachuDiet
	"https://static-cdn.jtvnw.net/emoticons/v1/303020976/3.0", // hachuPizza
	"https://static-cdn.jtvnw.net/emoticons/v1/302238202/3.0", //hachuB
	"https://static-cdn.jtvnw.net/emoticons/v1/303020977/3.0", // hachuKing
];

function dvd(option) {
  const marquee = document.querySelector(".marquee");
  const container = marquee.parentElement;
  const defaultSettings = {
    horizontal: true,
    vertical: true,
    speed: 100,
    bumpEdge: function () { },
  };

  const settings = {
    ...defaultSettings,
    ...option,
  };
  const move = {
    up: function () {
      marquee.animate(
        [
          // keyframes
          { top: `${container.offsetHeight - marquee.offsetHeight}px` },
          { top: 0 },
        ],
        {
          // timing options
          duration: (container.offsetHeight / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.down();
      };
    },
    down: function () {
      marquee.animate(
        [
          // keyframes
          { top: 0 },
          { top: `${container.offsetHeight - marquee.offsetHeight}px` },
        ],
        {
          // timing options
          duration: (container.offsetHeight / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.up();
      };
    },
    right: function () {
      marquee.animate(
        [
          { left: 0 },
          { left: `${container.offsetWidth - marquee.offsetWidth}px` },
        ],
        {
          duration: (container.offsetWidth / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.left();
      };
    },
    left: function () {
      marquee.animate(
        [
          { left: `${container.offsetWidth - marquee.offsetWidth}px` },
          { left: 0 },
        ],
        {
          duration: (container.offsetWidth / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.right();
      };
    },
  };

  if (settings.horizontal) {
    move.right();
  }
  if (settings.vertical) {
    move.down();
  }
}
dvd({
  speed: 100 * (new URL(window.location.href).searchParams.get("speed") || 3),
  bumpEdge: function () {
    document.querySelector(".emotes").src =
      emotes[Math.floor(Math.random() * emotes.length)];
  },
});
