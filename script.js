const PICTURES = [
  {
    src: "img/cat.jpg",
    alt: "Disappointed cat",
    fullcaption:
      "Disappointed cat is disappointed you left your screen unlocked.",
  },

  {
    src: "img/koala.jpg",
    alt: "Angry koala",
    fullcaption: "Lock your screen, fool.",
  },
  {
    src: "img/germanpresident.jpeg",
    alt: "Chancellor of Germany | Angela Merkel ",
    fullcaption: "Lock your screen, fool.",
  },
  {
    src: "img/mj23.jpg",
    alt: "Michael Jordan",
    fullcaption: "Lock your screen, I know you can DO IT.",
  },
  {
    src: "img/obama.jpg",
    alt: "Obama",
    fullcaption: "Do not make me sad! Lock your screen",
  },
  {
    src: "img/putin.jpg",
    alt: "President of Russia",
    fullcaption: "заблокируйте свой экран",
  },
  {
    src: "img/roo.jpg",
    alt: "Roger",
    fullcaption: "Roger is disappointed you left your screen unlocked.",
  },
  {
    src: "img/rte.jpg",
    alt: "Recep Tayyip Erdogan",
    fullcaption: "Lock your screen! Otherwise...",
  },
  {
    src: "img/skomo.jpg",
    alt: "President of Australia",
    fullcaption: "I have no idea why I'm here. Just lock your screen mate",
  },
  {
    src: "img/southkorea.jpg",
    alt: "President of North Korea",
    fullcaption: "Kim is disappointed you forgot to lock your screen.",
  },
  {
    src: "img/trump.jpg",
    alt: "President of USA",
    fullcaption: "I don't care you lock your screen or not",
  },
  {
    src: "img/trump2.jpg",
    alt: "President of USA",
    fullcaption: "Let's make screens locked again",
  },
];

window.onload = function () {
  randomPicture();
  let now = Date.now();
  setInterval(function () {
    document.getElementById("timeText").innerHTML = `
    It has been ${Math.floor(
      (Date.now() - now) / 1000
    )} seconds since you've been pwned 😈
    `;
  }, 1000);
};

function randomPicture() {
  let img = document.getElementById("img");
  let pic = PICTURES[Math.floor(Math.random() * PICTURES.length)];

  img.src = pic.src;
  img.alt = pic.alt;
  document.getElementById("caption").innerText = pic.fullcaption;
}
