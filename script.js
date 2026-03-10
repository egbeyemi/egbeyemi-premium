function openForm(){
document.getElementById("formSection").style.display="block";
}

function showPayment(){

let username = document.getElementById("username").value;
let whatsapp = document.getElementById("whatsapp").value;
let plan = document.getElementById("plan").value;

let message = "Hello Egbeyemi Premium,%0A%0AI want Spotify Premium.%0A%0ASpotify Username: " 
+ username + "%0AMy WhatsApp: " + whatsapp + "%0APlan: " + plan + "%0A%0AI will send payment screenshot shortly.";

let url = "https://wa.me/2349139103648?text=" + message;

window.open(url, "_blank");

}
