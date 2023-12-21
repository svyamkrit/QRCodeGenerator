let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let shareBtn = document.getElementById("shareBtn")

function generateQr() {
    if(qrText.value.length > 0)
    {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    imgBox.classList.add("img-show");
    shareBtn.classList.add("sharing");

    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
          qrText.classList.remove("error");
        }, 1000);
    }
}

// const link = 'https://youtu.be/fidPWVLwfs8?si=qzyeNh3CR3TH-JiM';

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;
