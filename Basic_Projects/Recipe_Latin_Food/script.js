// Headings/labels/menu translations
const i18n = {
  es: {
    titleMain: "Cocina Latina",
    welcome: "<em>¡Bienvenidos!</em> Explore recetas Latinas deliciosas.",
    banner: "¡COCINA LATINA!",
    introHeading: "Introduciendo el <em>Sazón Latino</em>",
    listHeading: "Lista de Nacionalidades Latinas del Menú de Hoy",
    countryCuba: "Cuba",
    countryBolivia: "Bolivia",
    countryVenezuela: "Venezuela",
    countryMexico: "México",
    countryTitleCuba: "🇨🇺 Cuba",
    countryTitleMexico: "🇲🇽 México",
    countryTitleVenezuela: "🇻🇪 Venezuela",
    countryTitleBolivia: "🇧🇴 Bolivia",
    dishCuba: "Congrí Cubano",
    dishMexico: "Flautas Mexicanas",
    dishVenezuela: "Arepa Venezolana",
    dishBolivia: "Pique Macho Boliviano",
    ingredientsLabel: "Ingredientes:",
    instructionsLabel: "Instrucciones:",
    congriAlt: "Congrí cubano en plato con arroz y frijoles",
    flautasAlt: "Flautas mexicanas crujientes",
    arepaAlt: "Arepa venezolana recién hecha",
    piqueAlt: "Pique macho boliviano servido",
  },
  en: {
    titleMain: "Latin Cuisine",
    welcome: "<em>Welcome!</em> Explore delicious Latin recipes.",
    banner: "LATIN CUISINE!",
    introHeading: "Introducing the <em>Latin Sazón</em>",
    listHeading: "Latin Countries on Today’s Menu",
    countryCuba: "Cuba",
    countryBolivia: "Bolivia",
    countryVenezuela: "Venezuela",
    countryMexico: "Mexico",
    countryTitleCuba: "🇨🇺 Cuba",
    countryTitleMexico: "🇲🇽 Mexico",
    countryTitleVenezuela: "🇻🇪 Venezuela",
    countryTitleBolivia: "🇧🇴 Bolivia",
    dishCuba: "Cuban Congrí",
    dishMexico: "Mexican Flautas",
    dishVenezuela: "Venezuelan Arepa",
    dishBolivia: "Bolivian Pique Macho",
    ingredientsLabel: "Ingredients:",
    instructionsLabel: "Instructions:",
    congriAlt: "Cuban congrí with rice and beans",
    flautasAlt: "Crispy Mexican flautas",
    arepaAlt: "Freshly made Venezuelan arepa",
    piqueAlt: "Bolivian pique macho served",
  },
};

function translatePage(lang) {
  const dict = i18n[lang] || i18n.es;

  // Text content (allow HTML for <em>/<strong>)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });

  // Attributes (e.g., image alt)
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key]) el.alt = dict[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("lang-switch");
  const saved = localStorage.getItem("lang");
  const fallback = navigator.language?.startsWith("es") ? "es" : "en";
  const lang = saved || fallback;

  if (select) {
    select.value = lang;
    select.addEventListener("change", (e) => translatePage(e.target.value));
  }
  translatePage(lang);
});
