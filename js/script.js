// Definir a data final da promoção
const countdownDate = new Date("FEB 28, 2025 23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculo dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // contagem regressiva
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Quando a contagem acabar
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("promoCountdown").innerText = "Promoção Expirada";
    }
}, 1000);
