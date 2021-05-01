// import "web-animations-js/web-animations-next-lite.min";
const emotes = [
	"https://static-cdn.jtvnw.net/emoticons/v1/303596309/3.0", // greenc17Love
	"https://static-cdn.jtvnw.net/emoticons/v1/305688204/3.0", // greenc17Sad
	"https://static-cdn.jtvnw.net/emoticons/v1/305688193/3.0", // greenc17AYAYA
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
