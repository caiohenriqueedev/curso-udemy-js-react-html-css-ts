const container = document.querySelector(".container");
const QrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value.trim();

  if (!qrCodeInputValue) return;

  QrCodeBtn.innerHTML = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    QrCodeBtn.innerHTML = "Código criado!";
  });
}

QrCodeBtn.addEventListener("click", generateQrCode);

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value.trim()) {
    container.classList.remove("active");
    QrCodeBtn.innerHTML = "Gerar QR Code";
  }
});
