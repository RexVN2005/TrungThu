// ===== Canvas sao & sao băng =====
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let w, h, stars = [], meteors = [];

function resizeCanvas() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  stars = [];
  const count = Math.round((w * h) / 2200);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 0.9 + 0.1,
      a: Math.random() * 0.8 + 0.2,
      t: Math.random() * 0.02 + 0.002
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  for (const s of stars) {
    s.a += (Math.random() > 0.5 ? 1 : -1) * s.t;
    s.a = Math.max(0.05, Math.min(1, s.a));
    ctx.beginPath();
    ctx.globalAlpha = s.a;
    ctx.fillStyle = "#fff";
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function createMeteor() {
  const startX = Math.random() * w;
  const startY = Math.random() * (h / 3);
  const speed = Math.random() * 10 + 6;
  meteors.push({
    x: startX,
    y: startY,
    vx: speed + 6,
    vy: speed / 2,
    len: Math.random() * 120 + 100,
    a: 1
  });
}

function drawMeteors() {
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];
    const x2 = m.x - m.len;
    const y2 = m.y - m.len / 2;
    const g = ctx.createLinearGradient(m.x, m.y, x2, y2);
    g.addColorStop(0, `rgba(255,255,255,${m.a})`);
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.strokeStyle = g;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    m.x += m.vx;
    m.y += m.vy;
    m.a -= 0.02;
    if (m.a <= 0 || m.x > w + 200 || m.y > h + 200) meteors.splice(i, 1);
  }
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1;
}

function loop() {
  drawStars();
  drawMeteors();
  if (Math.random() < 0.01) createMeteor();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
loop();

// ===== Đèn lồng & lời chúc =====
const lanternContainer = document.getElementById("lantern-container");

const wishes = [
  "Chúc em Trung Thu ấm áp và tràn đầy niềm vui!",
  "Chúc em luôn vui vẻ và hạnh phúc, yêu em!",
  "Mong em luôn sáng như trăng, ngọt như bánh nướng!",
  "Trung Thu vui vẻ, ngập tràn tiếng cười!",
  "Chúc em mọi điều tốt đẹp và may mắn!",
  "Anh yêu em mãi mãi, chúc em Trung Thu hạnh phúc!",
];

// 🌸 Danh sách hình ảnh (random)
const wishImages = [
  "images/wish1.png",
  "images/wish2.png",
  "images/wish3.png",
  "images/wish4.png",
  "images/wish5.png"
];

function createLantern() {
  const lantern = document.createElement("img");
  lantern.src = "den.png";
  lantern.className = "lantern swing";

  const layer = Math.floor(Math.random() * 3) + 1;
  let size = 40, duration = 10000, opacity = 0.8;

  if (layer === 1) {
    size = 20 + Math.random() * 20;
    duration = 14000 + Math.random() * 5000;
    opacity = 0.5;
  } else if (layer === 2) {
    size = 30 + Math.random() * 30;
    duration = 12000 + Math.random() * 4000;
    opacity = 0.7;
  } else {
    size = 40 + Math.random() * 40;
    duration = 10000 + Math.random() * 3000;
    opacity = 0.95;
  }

  lantern.style.width = size + "px";
  lantern.style.left = Math.random() * 90 + "vw";
  lantern.style.bottom = "0px";
  lantern.style.opacity = opacity;

  lanternContainer.appendChild(lantern);

  const drift = Math.random() * 140 - 70;
  const up = 120 + Math.random() * 40;
  lantern.animate(
    [
      { transform: "translate(0,0)", opacity: opacity },
      { transform: `translate(${drift}px, -${up}vh)`, opacity: 0 }
    ],
    { duration: duration, easing: "linear", fill: "forwards" }
  );

  setTimeout(() => lantern.remove(), duration);

  lantern.addEventListener("click", (e) => {
    e.stopPropagation();
    const popup = document.getElementById("wish-popup");
    const text = document.getElementById("wish-text");
    const img = document.getElementById("wish-img");

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const randomImg = wishImages[Math.floor(Math.random() * wishImages.length)];

    text.textContent = randomWish;
    img.src = randomImg;

    popup.style.display = "block";
  });
}

setInterval(createLantern, 500);

// ===== Nhạc nền =====
const bg = document.getElementById("bg-music");
const hint = document.getElementById("hint");
let musicStarted = false;

document.addEventListener("pointerdown", function startMusicOnce() {
  if (!musicStarted && bg) {
    bg.volume = 0;
    bg.play().then(() => {
      let v = 0;
      const fadeIn = setInterval(() => {
        v += 0.05;
        if (v >= 0.9) {
          v = 0.9;
          clearInterval(fadeIn);
        }
        bg.volume = v;
      }, 120);
      musicStarted = true;
    }).catch(e => console.log("Không thể phát nhạc:", e));
  }
  document.removeEventListener("pointerdown", startMusicOnce);
});

// ===== Ẩn popup khi click ngoài =====
document.addEventListener("click", () => {
  const pop = document.getElementById("wish-popup");
  if (pop && pop.style.display === "block") {
    pop.style.display = "none";
  }
});

// Hiện gợi ý
setTimeout(() => {
  if (hint) {
    hint.style.opacity = "1";
  }
  setTimeout(() => {
    if (hint) {
      hint.style.opacity = "0";
    }
  }, 5000);
}, 1000);
