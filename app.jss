function promijeniBuru() {
    const bar = document.getElementById('bura-status');
    if (bar.innerHTML.includes("JUGO")) {
        bar.innerHTML = "STATUS: BURA (MOSTRO ZATVOREN) 🌬️";
        bar.style.backgroundColor = "red";
        document.body.style.filter = "contrast(1.1)";
    } else {
        bar.innerHTML = "STATUS: JUGO (MIRNO MORE) - KLIKNI ZA BURU";
        bar.style.backgroundColor = "#000";
        document.body.style.filter = "none";
    }
}
