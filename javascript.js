let data = {
  0: {
    source: "./images/pic1.jpg",
    wish: "'Nam moi thanh thoi, khoi lo cung toi'",
    reward: "$100",
  },
  1: {
    source: "./images/pic2.jpg",
    wish: "'Nam moi vui ve, suc khoe day minh, khong lo san si, muon gi duoc tat'",
    reward: "$120",
  },
  2: {
    source: "./images/pic3.jpg",
    wish: "'Nam moi tien ve, tieu hoai ko het'",
    reward: "$160",
  },
  3: {
    source: "./images/pic4.jpg",
    wish: "'Khong con nhan nho, muon gi duoc do'",
    reward: "$180",
  },
  4: {
    source: "./images/pic5.jpg",
    wish: "'Sung tuc du day, gap nhieu dieu hay, noi cuoi hehehehehe'",
    reward: "$200",
  },
  4: {
    source: "./images/pic6.jpg",
    wish: "'Cau chuc dac biet: Nam moi chong cung hoan toan doi moi, chong se luon luon nghe loi vo va ko con cai vo, ko lam ba xa bun nua. Yeu vo kiep nay va den muon kiep sau'",
    reward: "$200",
  },
};

let randomNumber = Math.floor(Math.random() * 5);
let randomMoney = "$ " + Math.floor(Math.random() * 100 + 100);
let audio = new Audio("./images/bgmusic.mp3");
audio.play();

let isPlaying = true;

document.getElementById("pictitle").src = data[randomNumber].source;
document.getElementById("wish").innerHTML = data[randomNumber].wish;
document.getElementById("reward").innerHTML = randomMoney;

function openEnvelop() {
  document.getElementById("container").style.visibility = "visible";
  document.querySelector(".envelopCover").classList.add("openEnvelop");
}

function playMusic() {
  document.getElementById("speaker").src = "./images/audio-speaker.png";
  audio.play();
  isPlaying = true;
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
