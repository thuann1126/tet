let data = {
  0: {
    wish: "Wish my little wife always stays strong and stable in life, eliminates all the unhappy things and has a meaningful new year. I always stand by your side and support you anythime. Love you forever!!",
    reward: "$100",
  },
  1: {
    wish: "Wish my wife is always cute and beautiful, healthy, and talent. You are always the best girl in my heart, I will and always be on your side now and forever!!",
    reward: "$120",
  },
  2: {
    wish: "New year, new stuffs, new feeling. I wish our love will be bound tighter and tighter, and we will achieve all the things we want. Love you forever!",
    reward: "$160",
  },
  3: {
    wish: "If I have 3 wishes, the first one I will wish to be your husband in multi universes, the second one I will wish to love you in every life we are, and the third one I will wish to be the dad of your children in every planet we live! I love you forever!",
    reward: "$180",
  },
  4: {
    wish: "The life is so empty without you. Thank you for blesisng me with your love, hapiness. Until we stop breathing, you have me, and 100 more new years. Love you forever!",
    reward: "$200",
  },
};

let randomNumber = Math.floor(Math.random() * 5);
let audio = new Audio("./images/bgmusic.mp3");
audio.play();
let isPlaying = true;

document.getElementById("wish").innerHTML = data[randomNumber].wish;
document.getElementById("reward").innerHTML = data[randomNumber].reward;

function openEnvelop() {
  document.getElementById("container").style.visibility = "visible";
  document.querySelector(".envelopCover").classList.add("openEnvelop");
  document.querySelector(".envelop:hover").animate("static");
}

function playtoggle() {
  if (isPlaying) {
    document.getElementById("speaker").src = "./images/mute.png";
    audio.pause();
    isPlaying = false;
  } else {
    document.getElementById("speaker").src = "./images/audio-speaker.png";
    audio.play();
    isPlaying = true;
  }
}
