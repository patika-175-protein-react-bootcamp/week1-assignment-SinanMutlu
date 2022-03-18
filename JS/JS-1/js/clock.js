let isim = prompt("İsminiz nedir?");
document.getElementById("myName").innerHTML = isim;

function guncelSaat(){
    
    const tarih = new Date();
    let deyt = tarih.toLocaleTimeString();   
    document.getElementById("myClock").innerHTML = deyt;
}

setInterval(guncelSaat,1000)

