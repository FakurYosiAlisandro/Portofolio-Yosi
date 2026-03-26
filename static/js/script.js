// Fungsi untuk memicu animasi saat elemen muncul di layar (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Menjalankan fungsi reveal saat scroll
window.addEventListener("scroll", reveal);

// Menjalankan fungsi reveal saat halaman pertama kali dimuat
window.onload = reveal;

// Logika sederhana untuk menu mobile (jika diperlukan pengembangan lebih lanjut)
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        console.log('Menu mobile diklik');
    });
}