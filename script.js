const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numbers = "0123456789";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  /* Dark fade for smooth trail */
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, index) => {
    const text = numbers.charAt(Math.floor(Math.random() * numbers.length));
    const x = index * fontSize;

    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.97) {
      drops[index] = 0;
    }

    drops[index]++;
  });
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
