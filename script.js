function createAccount(){

let name = document.getElementById("name").value
let whatsapp = document.getElementById("whatsapp").value

if(name === "" || whatsapp === ""){
alert("Please fill all fields")
return
}

localStorage.setItem("user_name", name)
localStorage.setItem("user_whatsapp", whatsapp)

document.getElementById("register").style.display="none"
document.getElementById("dashboard").style.display="block"

}

function openForm(){

document.getElementById("formSection").style.display="block"

}

function orderPremium(){

let username = document.getElementById("username").value
let plan = document.getElementById("plan").value

let name = localStorage.getItem("user_name")
let whatsapp = localStorage.getItem("user_whatsapp")

let message = "Hello Egbeyemi Premium,%0A%0AI want Spotify Premium.%0A%0AName: "
+ name + "%0AWhatsApp: " + whatsapp + "%0ASpotify Username: "
+ username + "%0APlan: " + plan + "%0A%0AI will send payment proof."

let url = "https://wa.me/2349139103648?text=" + message

window.open(url,"_blank")

}
