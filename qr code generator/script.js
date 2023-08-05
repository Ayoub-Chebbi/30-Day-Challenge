let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector(".qrText");

function generateQr(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}