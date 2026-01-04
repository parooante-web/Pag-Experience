// Funkcija za ažuriranje sata
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

// Pokreni sat svake sekunde
setInterval(updateClock, 1000);
updateClock(); // Inicijalni poziv

// Funkcija za Bura Mod
function toggleBura() {
    const body = document.body;
    const btnText = document.getElementById('btn-text');
    const icon = document.getElementById('wind-icon');
    
    body.classList.toggle('bura-active');
    
    if (body.classList.contains('bura-active')) {
        btnText.innerText = "BURA PUŠE!";
        icon.innerText = "⚡";
        console.log("Bura mod aktiviran");
    } else {
        btnText.innerText = "AKTIVIRAJ BURU";
        icon.innerText = "🌬️";
        console.log("Bura mod deaktiviran");
    }
}
