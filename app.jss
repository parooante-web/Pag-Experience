function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString('hr-HR');
}
setInterval(updateClock, 1000);
updateClock();

function toggleBura() {
    document.body.classList.toggle('bura-active');
    const btn = document.querySelector('.bura-btn');
    
    if(document.body.classList.contains('bura-active')) {
        btn.innerHTML = "🌀 BURA PUŠE (ISKLJUČI)";
        btn.style.background = "#fff";
        // Simulacija zvuka vjetra u konzoli
        console.log("Whoooosh! Bura 120km/h");
    } else {
        btn.innerHTML = "🌬️ AKTIVIRAJ BURU";
        btn.style.background = "#00d2ff";
    }
}
