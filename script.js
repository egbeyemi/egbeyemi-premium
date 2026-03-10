function createAccount(){

let name=document.getElementById("name").value
let whatsapp=document.getElementById("whatsapp").value

localStorage.setItem("name",name)
localStorage.setItem("whatsapp",whatsapp)

document.getElementById("register").style.display="none"
document.getElementById("offer").style.display="block"

}

function startEnjoying(){

document.getElementById("offer").style.display="none"
document.getElementById("renewal").style.display="block"

}

function continuePayment(){

document.getElementById("renewal").style.display="none"
document.getElementById("payment").style.display="block"

}

function proceedPayment(){

let name=localStorage.getItem("name")
let whatsapp=localStorage.getItem("whatsapp")

let message="Hello Egbeyemi Premium,%0A%0AI want Spotify Premium.%0A%0AName: "+name+"%0AWhatsApp: "+whatsapp+"%0ATotal Payment: ₦708"

let url="https://wa.me/2349139103648?text="+message

window.open(url,"_blank")

}
