const DETAIL_I18N = {
  zh: {
    backToMap: "← 返回地圖",
    photoSourceWiki: "圖片來源：Wikipedia",
    photoSourceFallback: "示意圖",
    wetlandTitle: "濕地生態與保育",
    relatedTitle: "同地點其他代表鳥種",
    taxonomy: "分類",
    bodyLength: "體長",
    wingspan: "翼展",
    diet: "食性",
    niche: "生態位",
    population: "族群狀態",
    hydrology: "水文",
    plants: "優勢植被",
    threats: "主要威脅",
    actions: "保育行動",
    introFallback: "此物種在本地濕地食物網中扮演重要角色，對棲地管理與水質變化相當敏感。"
  },
  en: {
    backToMap: "← Back to Map",
    photoSourceWiki: "Photo: Wikipedia",
    photoSourceFallback: "Illustrative image",
    wetlandTitle: "Wetland Ecology & Conservation",
    relatedTitle: "Other Representative Birds at This Site",
    taxonomy: "Taxonomy",
    bodyLength: "Body Length",
    wingspan: "Wingspan",
    diet: "Diet",
    niche: "Ecological Niche",
    population: "Population Trend",
    hydrology: "Hydrology",
    plants: "Dominant Plants",
    threats: "Key Threats",
    actions: "Conservation Actions",
    introFallback: "This species plays an important role in local wetland food webs and is sensitive to habitat and water-quality changes."
  }
};

// HOTSPOTS data mirrored from app.js for bird detail page
const HOTSPOT_DETAIL_LIBRARY = {
  yuen_long_north: {
    siteName: {
      zh: "元朗北發展區",
      en: "Yuen Long North Development Area"
    },
    subtitle: {
      zh: "后海灣內陸濕地交界帶",
      en: "Inner Deep Bay wetland transition zone"
    },
    wetland: {
      hydrology: {
        zh: "受潮汐、雨季逕流與魚塘閘門管理共同影響",
        en: "Hydrology is driven by tides, monsoon runoff, and fishpond gate management"
      },
      plants: {
        zh: "蘆葦群落、紅樹林邊緣帶與草本濕地植被",
        en: "Reed beds, mangrove margins, and herbaceous wetland vegetation"
      },
      threats: {
        zh: "棲地碎片化、光害與道路噪音、污染輸入",
        en: "Habitat fragmentation, light/noise disturbance, and pollution loading"
      },
      actions: {
        zh: "保留生態廊道、分區緩衝帶、維持冬候鳥高水位棲地",
        en: "Retain ecological corridors, create buffer zoning, and maintain wintering high-water habitats"
      }
    },
    birds: [
      {
        commonName: {
          zh: "黑臉琵鷺",
          en: "Black-faced Spoonbill"
        },
        scientificName: "Platalea minor",
        wikiTitle: "Black-faced spoonbill",
        intro: {
          zh: "黑臉琵鷺是東亞遷徙線的重要旗艦物種，常在淺水區左右掃動匙狀喙覓食。其族群對潮汐泥灘面積、水質與人為干擾變化極為敏感。",
          en: "The black-faced spoonbill is a flagship species on the East Asian flyway, feeding by sweeping its spoon-shaped bill in shallow water. Its population is highly sensitive to mudflat extent, water quality, and disturbance."
        },
        biology: {
          taxonomy: "Pelecaniformes / Threskiornithidae",
          bodyLength: "66-78 cm",
          wingspan: "120-135 cm",
          diet: {
            zh: "小魚、甲殼類、底棲無脊椎",
            en: "Small fish, crustaceans, benthic invertebrates"
          },
          niche: {
            zh: "淺水觸覺覓食者",
            en: "Shallow-water tactile feeder"
          },
          population: {
            zh: "全球瀕危",
            en: "Globally endangered"
          }
        }
      },
      {
        commonName: {
          zh: "針尾鴨",
          en: "Northern Pintail"
        },
        scientificName: "Anas acuta",
        wikiTitle: "Northern pintail",
        intro: {
          zh: "針尾鴨在冬季大量遷入本地濕地，利用各類水深的積水農地與魚塘停棲補食。其族群波動與東亞大尺度氣候變異及棲地水管理密切相關。",
          en: "Northern pintails migrate into local wetlands in winter, using varied-depth flooded farmlands and ponds. Population trends reflect broad East Asian climate variability and wetland water management."
        },
        biology: {
          taxonomy: "Anseriformes / Anatidae",
          bodyLength: "64-77 cm",
          wingspan: "80-105 cm",
          diet: {
            zh: "水生植物種子、嫩芽與小型無脊椎",
            en: "Aquatic plant seeds, shoots, and small invertebrates"
          },
          niche: {
            zh: "淺灘與農地停棲補食者",
            en: "Shallow-water and flooded-field refueler"
          },
          population: {
            zh: "候鳥族群季節性波動",
            en: "Seasonally fluctuating migratory population"
          }
        }
      },
      {
        commonName: {
          zh: "小白鷺",
          en: "Little Egret"
        },
        scientificName: "Egretta garzetta",
        wikiTitle: "Little egret",
        intro: {
          zh: "小白鷺作為本地常見之小型鷺，對各類淺水棲地適應能力強，但對人為干擾敏感。在魚塘與潮間帶間往返，扮演中層捕食者角色。",
          en: "The little egret is a locally common small heron with broad shallow-water habitat use but sensitivity to disturbance. It moves between fishponds and tidal flats, serving as a mid-level predator."
        },
        biology: {
          taxonomy: "Pelecaniformes / Ardeidae",
          bodyLength: "55-65 cm",
          wingspan: "88-106 cm",
          diet: {
            zh: "小魚、蝦與兩棲幼體",
            en: "Small fish, shrimp, and amphibian larvae"
          },
          niche: {
            zh: "淺水視覺型捕食者",
            en: "Shallow-water visual predator"
          },
          population: {
            zh: "本地常見，對干擾敏感",
            en: "Locally common but disturbance-sensitive"
          }
        }
      }
    ]
  },
  mai_po_wetland_park: {
    siteName: {
      zh: "香港米埔濕地公園",
      en: "Hong Kong Mai Po Wetland Park"
    },
    subtitle: {
      zh: "拉姆薩爾濕地核心區與候鳥熱點",
      en: "Core Ramsar wetland zone and migratory bird hotspot"
    },
    wetland: {
      hydrology: {
        zh: "潮汐交換、魚塘抽排與降雨共同塑造鹽淡梯度",
        en: "Tidal exchange, pond water control, and rainfall create a brackish-freshwater gradient"
      },
      plants: {
        zh: "紅樹林、基圍邊緣草本與水生植物帶",
        en: "Mangroves, gei wai fringe herbs, and aquatic vegetation belts"
      },
      threats: {
        zh: "外來種、上游污染、極端天氣造成棲地波動",
        en: "Invasive species, upstream pollution, and extreme weather habitat shifts"
      },
      actions: {
        zh: "魚塘友善管理、候鳥季減少干擾、長期水鳥監測",
        en: "Wildlife-friendly pond operation, disturbance control in migration season, and long-term bird monitoring"
      }
    },
    birds: [
      {
        commonName: {
          zh: "黑臉琵鷺",
          en: "Black-faced Spoonbill"
        },
        scientificName: "Platalea minor",
        wikiTitle: "Black-faced spoonbill",
        intro: {
          zh: "米埔為全球黑臉琵鷺最重要越冬地之一，其泥灘與魚塘系統提供關鍵覓食棲地。該物種被列為國際拉姆薩爾公約保護對象。",
          en: "Mai Po is one of the most important wintering sites globally for black-faced spoonbills, whose tidal and pond ecosystems provide critical feeding habitat. The species is protected under the Ramsar Convention."
        },
        biology: {
          taxonomy: "Pelecaniformes / Threskiornithidae",
          bodyLength: "66-78 cm",
          wingspan: "120-135 cm",
          diet: {
            zh: "魚蝦與泥灘底棲生物",
            en: "Fish, shrimp, and mudflat benthos"
          },
          niche: {
            zh: "指標物種，可反映泥灘生產力與水質狀態",
            en: "Indicator species reflecting mudflat productivity and water quality"
          },
          population: {
            zh: "東亞遷徙路徑關鍵越冬族群",
            en: "Key wintering population on the East Asian flyway"
          }
        }
      },
      {
        commonName: {
          zh: "小青足鷸",
          en: "Common Greenshank"
        },
        scientificName: "Tringa nebularia",
        wikiTitle: "Common greenshank",
        intro: {
          zh: "小青足鷸在遷徙季大量利用泥灘邊緣與淺水區，對底棲無脊椎生物量與潮差週期變化反應快速。",
          en: "Common greenshanks use mudflat edges and shallow water during migration and respond quickly to benthic prey availability and tidal cycles."
        },
        biology: {
          taxonomy: "Charadriiformes / Scolopacidae",
          bodyLength: "30-34 cm",
          wingspan: "55-62 cm",
          diet: {
            zh: "小魚、軟體動物、環節動物",
            en: "Small fish, mollusks, annelids"
          },
          niche: {
            zh: "潮灘機會型捕食者",
            en: "Opportunistic feeder on tidal flats"
          },
          population: {
            zh: "遷徙季常見",
            en: "Common during migration"
          }
        }
      },
      {
        commonName: {
          zh: "反嘴鷸",
          en: "Pied Avocet"
        },
        scientificName: "Recurvirostra avosetta",
        wikiTitle: "Pied avocet",
        intro: {
          zh: "反嘴鷸透過上翹喙在淺水中橫向掃食，能有效利用泥灘表層微棲地，常被視作濕地管理成果指標之一。",
          en: "Pied avocets sweep their upcurved bills laterally in shallow water, exploiting surface microhabitats and serving as useful indicators of wetland management outcomes."
        },
        biology: {
          taxonomy: "Charadriiformes / Recurvirostridae",
          bodyLength: "42-46 cm",
          wingspan: "77-80 cm",
          diet: {
            zh: "甲殼類、水生昆蟲幼生",
            en: "Crustaceans, aquatic insect larvae"
          },
          niche: {
            zh: "淺水掃食專化者",
            en: "Specialized shallow-water sweeper"
          },
          population: {
            zh: "具保育關注價值",
            en: "Conservation-interest population"
          }
        }
      }
    ]
  }
};

const PAGE_STATE = {
  lang: "zh",
  hotspotId: "yuen_long_north",
  birdIndex: 0
};

const dom = {};

window.addEventListener("DOMContentLoaded", initDetailPage);

function initDetailPage() {
  cacheDom();
  readQuery();
  applyLanguage();
  renderPage();
}

function cacheDom() {
  dom.backToMap = document.getElementById("backToMap");
  dom.langToggleBtn = document.getElementById("langToggleBtn");
  dom.birdPhoto = document.getElementById("birdPhoto");
  dom.siteBadge = document.getElementById("siteBadge");
  dom.photoSource = document.getElementById("photoSource");
  dom.birdName = document.getElementById("birdName");
  dom.birdScience = document.getElementById("birdScience");
  dom.birdIntro = document.getElementById("birdIntro");
  dom.factsGrid = document.getElementById("factsGrid");
  dom.wetlandTitle = document.getElementById("wetlandTitle");
  dom.wetlandHydrology = document.getElementById("wetlandHydrology");
  dom.wetlandPlants = document.getElementById("wetlandPlants");
  dom.wetlandThreats = document.getElementById("wetlandThreats");
  dom.wetlandActions = document.getElementById("wetlandActions");
  dom.relatedTitle = document.getElementById("relatedTitle");
  dom.relatedBirds = document.getElementById("relatedBirds");

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

  const hotspot = params.get("hotspot") || "yuen_long_north";
  if (HOTSPOT_DETAIL_LIBRARY[hotspot]) {
    PAGE_STATE.hotspotId = hotspot;
  }

  const birdIndex = Number(params.get("bird") || 0);
  if (Number.isFinite(birdIndex) && birdIndex >= 0) {
    PAGE_STATE.birdIndex = birdIndex;
  }
}

function applyLanguage() {
  document.documentElement.lang = PAGE_STATE.lang === "zh" ? "zh-Hant" : "en";
  localStorage.setItem("duck_island_eco_lang", PAGE_STATE.lang);
  dom.langToggleBtn.textContent = PAGE_STATE.lang === "zh" ? "English" : "繁中";
  dom.backToMap.textContent = t("backToMap");
}

function t(key) {
  return DETAIL_I18N[PAGE_STATE.lang][key] || key;
}

function renderPage() {
  const hotspot = HOTSPOT_DETAIL_LIBRARY[PAGE_STATE.hotspotId] || HOTSPOT_DETAIL_LIBRARY.yuen_long_north;
  const birds = hotspot.birds || [];
  const safeBirdIndex = clamp(PAGE_STATE.birdIndex, 0, Math.max(0, birds.length - 1));
  PAGE_STATE.birdIndex = safeBirdIndex;
  const bird = birds[safeBirdIndex] || birds[0];

  const params = new URLSearchParams();
  params.set("lang", PAGE_STATE.lang);
  params.set("hotspot", PAGE_STATE.hotspotId);
  params.set("bird", String(PAGE_STATE.birdIndex));
  window.history.replaceState({}, "", `?${params.toString()}`);

  dom.backToMap.href = `./index.html?lang=${encodeURIComponent(PAGE_STATE.lang)}`;
  dom.siteBadge.textContent = localize(hotspot.siteName);
  dom.birdName.textContent = localize(bird.commonName);
  dom.birdScience.textContent = bird.scientificName;
  dom.birdIntro.textContent = localize(bird.intro) || t("introFallback");

  dom.wetlandTitle.textContent = t("wetlandTitle");
  dom.wetlandHydrology.innerHTML = `<strong>${escapeHtml(t("hydrology"))}:</strong> ${escapeHtml(localize(hotspot.wetland.hydrology))}`;
  dom.wetlandPlants.innerHTML = `<strong>${escapeHtml(t("plants"))}:</strong> ${escapeHtml(localize(hotspot.wetland.plants))}`;
  dom.wetlandThreats.innerHTML = `<strong>${escapeHtml(t("threats"))}:</strong> ${escapeHtml(localize(hotspot.wetland.threats))}`;
  dom.wetlandActions.innerHTML = `<strong>${escapeHtml(t("actions"))}:</strong> ${escapeHtml(localize(hotspot.wetland.actions))}`;

  renderFacts(bird);
  renderRelatedBirds(hotspot, birds);
  void loadBirdImage(bird);
}

function renderFacts(bird) {
  const items = [
    { label: t("taxonomy"), value: bird.biology.taxonomy },
    { label: t("bodyLength"), value: bird.biology.bodyLength },
    { label: t("wingspan"), value: bird.biology.wingspan },
    { label: t("diet"), value: localize(bird.biology.diet) },
    { label: t("niche"), value: localize(bird.biology.niche) },
    { label: t("population"), value: localize(bird.biology.population) }
  ];

  dom.factsGrid.innerHTML = items
    .map((item) => {
      return `
        <article class="fact-item">
          <p class="fact-label">${escapeHtml(item.label)}</p>
          <p class="fact-value">${escapeHtml(item.value || "-")}</p>
        </article>
      `;
    })
    .join("");
}

function renderRelatedBirds(hotspot, birds) {
  dom.relatedTitle.textContent = t("relatedTitle");
  dom.relatedBirds.innerHTML = birds
    .map((bird, index) => {
      const active = index === PAGE_STATE.birdIndex ? " active" : "";
      const params = new URLSearchParams();
      params.set("hotspot", PAGE_STATE.hotspotId);
      params.set("bird", String(index));
      params.set("lang", PAGE_STATE.lang);

      return `
        <a class="related-btn${active}" href="?${params.toString()}">
          <span class="related-name">${escapeHtml(localize(bird.commonName))}</span>
          <span class="related-sci">${escapeHtml(bird.scientificName)}</span>
        </a>
      `;
    })
    .join("");
}

async function loadBirdImage(bird) {
  const fallback = `https://placehold.co/1280x720/e3f4ee/154b46?text=${encodeURIComponent(
    localize(bird.commonName)
  )}`;

  try {
    const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      bird.wikiTitle
    )}`;
    const response = await fetch(endpoint, { method: "GET" });
    if (!response.ok) {
      throw new Error("WIKI_FETCH_FAILED");
    }

    const payload = await response.json();
    const imageUrl = payload?.originalimage?.source || payload?.thumbnail?.source;
    if (!imageUrl) {
      throw new Error("WIKI_IMAGE_MISSING");
    }

    dom.birdPhoto.src = imageUrl;
    dom.birdPhoto.alt = `${localize(bird.commonName)} photo`;
    dom.photoSource.textContent = t("photoSourceWiki");
  } catch (error) {
    dom.birdPhoto.src = fallback;
    dom.birdPhoto.alt = `${localize(bird.commonName)} photo`;
    dom.photoSource.textContent = t("photoSourceFallback");
  }
}

function localize(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value[PAGE_STATE.lang] || value.en || value.zh || "";
}

function toggleLanguage() {
  PAGE_STATE.lang = PAGE_STATE.lang === "zh" ? "en" : "zh";
  applyLanguage();
  renderPage();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
