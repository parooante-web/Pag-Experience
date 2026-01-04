function checkBura() {
    const btn = document.getElementById('buraBtn');
    if (btn.innerText.includes("AKTIVIRAJ")) {
        btn.innerText = "⚠️ BURA PUŠE - MOST ZATVOREN";
        btn.style.background = "#000";
        document.body.style.background = "linear-gradient(45deg, #2c3e50, #000000)";
    } else {
        btn.innerText = "STATUS: BURU AKTIVIRAJ";
        btn.style.background = "#ef4444";
        document.body.style.background = "linear-gradient(45deg, #0f172a, #1e293b, #334155)";
    }
}
