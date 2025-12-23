// ---------- Contador ----------
const targetDate = new Date("2026-03-06T00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").textContent = "¡Ya estamos online! 🎉";
  }
}, 1000);

// ---------- Cambio de idioma ----------
const texts = {
  es: {
    title: "ESTAMOS CREANDO ALGO ESPECIAL",
    description: "Estamos creando algo especial",
    subtext: "Volveremos muy pronto."
  },
  en: {
    title: "WE ARE CREATING SOMETHING SPECIAL",
    description: "We are creating something special",
    subtext: "We'll be back very soon."
  }
};

let currentLang = "es";

const btnES = document.getElementById("btnES");
const btnEN = document.getElementById("btnEN");

function setLanguage(lang) {
  currentLang = lang;

  document.getElementById("title").textContent = texts[lang].title;
  document.getElementById("description").textContent = texts[lang].description;
  document.getElementById("subtext").textContent = texts[lang].subtext;

  // Actualiza estilo de botones
  if (lang === "es") {
    btnES.classList.add("active");
    btnEN.classList.remove("active");
  } else {
    btnEN.classList.add("active");
    btnES.classList.remove("active");
  }
}

// Eventos
btnES.addEventListener("click", () => setLanguage("es"));
btnEN.addEventListener("click", () => setLanguage("en"));
