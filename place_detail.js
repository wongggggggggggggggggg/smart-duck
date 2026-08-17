const DETAIL_I18N = {
  zh: {
    backToMap: "← 返回地圖",
    factsTitle: "重點資訊",
    sectionsTitle: "科普內容",
    typeRegion: "區域",
    typeLandmark: "地點",
    typeDefault: "生態點",
    notFound: "找不到對應的地點資料。"
  },
  en: {
    backToMap: "← Back to Map",
    factsTitle: "Key Facts",
    sectionsTitle: "Science Notes",
    typeRegion: "Region",
    typeLandmark: "Landmark",
    typeDefault: "Site",
    notFound: "Place data not found."
  }
};

const PAGE_STATE = {
  lang: "zh",
  placeId: ""
};

const dom = {};
let PLACES_CACHE = [];

window.addEventListener("DOMContentLoaded", initDetailPage);

async function initDetailPage() {
  cacheDom();
  readQuery();
  applyLanguage();
  const places = await loadPlaces();
  PLACES_CACHE = places;
  renderPage(PLACES_CACHE);
}

function cacheDom() {
  dom.backToMap = document.getElementById("backToMap");
  dom.langToggleBtn = document.getElementById("langToggleBtn");
  dom.placeType = document.getElementById("placeType");
  dom.placeName = document.getElementById("placeName");
  dom.placeSummary = document.getElementById("placeSummary");
  dom.placeTags = document.getElementById("placeTags");
  dom.factsTitle = document.getElementById("factsTitle");
  dom.factsGrid = document.getElementById("factsGrid");
  dom.sectionsTitle = document.getElementById("sectionsTitle");
  dom.sectionsList = document.getElementById("sectionsList");

  dom.langToggleBtn.addEventListener("click", toggleLanguage);
}

function readQuery() {
  const params = new URLSearchParams(window.location.search);
  const savedLang = localStorage.getItem("duck_island_eco_lang");
  const requestedLang = params.get("lang");
  if (requestedLang === "zh" || requestedLang === "en") {
    PAGE_STATE.lang = requestedLang;
  } else if (savedLang === "zh" || savedLang === "en") {
    PAGE_STATE.lang = savedLang;
  }

  PAGE_STATE.placeId = params.get("place") || "";
}

function applyLanguage() {
  document.documentElement.lang = PAGE_STATE.lang === "zh" ? "zh-Hant" : "en";
  localStorage.setItem("duck_island_eco_lang", PAGE_STATE.lang);
  dom.langToggleBtn.textContent = PAGE_STATE.lang === "zh" ? "English" : "繁中";
  dom.backToMap.textContent = t("backToMap");
  dom.factsTitle.textContent = t("factsTitle");
  dom.sectionsTitle.textContent = t("sectionsTitle");
  dom.backToMap.href = `./index.html?lang=${encodeURIComponent(PAGE_STATE.lang)}`;
}

function t(key) {
  return DETAIL_I18N[PAGE_STATE.lang][key] || key;
}

async function loadPlaces() {
  try {
    const response = await fetch("./data/places.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Places request failed: ${response.status}`);
    }
    const payload = await response.json();
    if (Array.isArray(payload)) {
      return payload;
    }
    if (Array.isArray(payload?.places)) {
      return payload.places;
    }
  } catch (error) {
    console.warn("Unable to load places data", error);
  }

  return [];
}

function renderPage(places) {
  const place = places.find((item) => item.id === PAGE_STATE.placeId) || places[0];
  if (!place) {
    dom.placeName.textContent = t("notFound");
    dom.placeSummary.textContent = "";
    dom.placeType.textContent = "";
    dom.placeTags.innerHTML = "";
    dom.factsGrid.innerHTML = "";
    dom.sectionsList.innerHTML = "";
    return;
  }

  dom.placeType.textContent = getTypeLabel(place.type);
  dom.placeName.textContent = localize(place.name);
  dom.placeSummary.textContent = localize(place.summary);

  const tags = Array.isArray(place.tags) ? place.tags : [];
  dom.placeTags.innerHTML = tags
    .map((tag) => `<span class="tag">${escapeHtml(String(tag))}</span>`)
    .join("");

  const facts = Array.isArray(place.facts) ? place.facts : [];
  dom.factsGrid.innerHTML = facts
    .map((fact) => {
      return `
        <article class="fact-item">
          <p class="fact-label">${escapeHtml(localize(fact.label))}</p>
          <p class="fact-value">${escapeHtml(localize(fact.value))}</p>
        </article>
      `;
    })
    .join("");

  const sections = Array.isArray(place.sections) ? place.sections : [];
  dom.sectionsList.innerHTML = sections
    .map((section) => {
      return `
        <article class="section-card">
          <h3>${escapeHtml(localize(section.title))}</h3>
          <p>${escapeHtml(localize(section.body))}</p>
        </article>
      `;
    })
    .join("");
}

function getTypeLabel(type) {
  if (type === "region") {
    return t("typeRegion");
  }
  if (type === "landmark") {
    return t("typeLandmark");
  }
  return t("typeDefault");
}

function localize(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.join(" / ");
  }

  if (typeof value === "object") {
    return value[PAGE_STATE.lang] || value.zh || value.en || "";
  }

  return String(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toggleLanguage() {
  PAGE_STATE.lang = PAGE_STATE.lang === "zh" ? "en" : "zh";
  applyLanguage();
  renderPage(PLACES_CACHE);
}
