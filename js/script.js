document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function autoSlide() {
        index = (index + 1) % totalSlides; // Loop kembali ke awal setelah slide terakhir
        slides.style.transition = "transform 0.5s ease-in-out"; // Tambahkan transisi yang lebih smooth
        slides.style.transform = `translateX(${-index * 100}%)`; // Geser slide
    }

    // Set autoslide berjalan setiap 10 detik
    setInterval(autoSlide, 10000);

    // Pastikan slide pertama muncul dengan benar
    slides.style.transform = "translateX(0%)";
});


// Fungsi menangani submit form
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageText").value;

    // Cegah error jika gender belum dipilih
    if (!genderInput) {
        alert("Silakan pilih jenis kelamin.");
        return;
    }

    const gender = genderInput.value;
    
    // Menampilkan hasil input di sebelah kanan
    const messageOutput = document.getElementById("messageOutput");
    messageOutput.innerHTML = `<strong>Terima kasih, ${name}!</strong><br>
                               <p><b>Tanggal Lahir:</b> ${dob}</p>
                               <p><b>Jenis Kelamin:</b> ${gender}</p>
                               <p><b>Pesan:</b> ${message}</p>`;
    messageOutput.style.display = "block";

    // Reset form setelah submit
    document.getElementById("messageForm").reset();
});
