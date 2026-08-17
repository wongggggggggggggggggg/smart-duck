const STORAGE_KEY = "duck_island_eco_checkins_v1";
const LANG_KEY = "duck_island_eco_lang";
const GMAIL_CACHE_KEY = "duck_island_gmail_cache_v1";
const MAX_PHOTO_COUNT = 2;
const MAX_PHOTO_SIZE_BYTES = 2 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const GMAIL_SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
const PLACES_URL = "./data/places.json";

const I18N = {
  zh: {
    appTitle: "小鴨與小島生態保育站",
    appSubtitle: "定位打卡、照片辨識與保育行動建議",
    clearDataBtn: "清除本機紀錄",
    checkinTitle: "生態打卡",
    notesLabel: "觀察筆記",
    notesPlaceholder: "例如：看到兩隻小鴨在潮間帶覓食",
    tagsLabel: "標籤（以逗號分隔）",
    tagsPlaceholder: "濕地, 海岸, 鳥類",
    getLocationBtn: "取得目前位置",
    startTrackingBtn: "開始即時追蹤",
    stopTrackingBtn: "停止即時追蹤",
    latitudeLabel: "緯度",
    longitudeLabel: "經度",
    photoLabel: "上傳觀察照片",
    submitBtn: "上傳並建立打卡",
    mapTitle: "即時地圖",
    mapLeaflet: "Leaflet 地圖",
    mapGoogle: "Google 地圖",
    resultTitle: "AI 識別結果",
    feedTitle: "最新打卡",
    privacyNotice:
      "隱私提醒：本頁會在你同意後讀取定位，照片與打卡資料只儲存在目前瀏覽器（LocalStorage）。",
    uploadHint: "最多 2 張，單張不超過 2MB，支援 JPG / PNG / WEBP。",
    mapLoading: "地圖載入中...",
    mapReady: "地圖已準備完成，請先取得定位。",
    mapFallback: "地圖圖磚連線失敗，改用備援圖層...",
    mapTileError: "無法載入地圖，請確認網路或稍後再試。",
    mapLibError: "地圖元件載入失敗，請重新整理。",
    placeDetailBtn: "查看科普",
    placeSummaryMissing: "此地點尚無描述。",
    hotspotBirdsTitle: "代表鳥種",
    hotspotWetlandTitle: "濕地生態資訊",
    hotspotPopulationLabel: "族群狀態",
    hotspotDietLabel: "食性",
    hotspotNicheLabel: "生態位",
    hotspotHydrologyLabel: "水文",
    hotspotPlantLabel: "優勢植被",
    hotspotThreatLabel: "主要威脅",
    hotspotActionLabel: "保育行動",
    hotspotOpenBirdDetail: "查看完整鳥類介紹頁",
    hotspotTitle: "濕地觀測點導覽",
    hotspotHint: "在地圖點擊觀測點（手機可觸控）查看鳥類與濕地細節。",
    hotspotDetailEmpty: "請選擇一個觀測點查看科學資料。",
    locating: "定位中，請稍候...",
    locationUpdated: "位置已更新。",
    locationPermissionDenied: "未授權定位，請在瀏覽器中允許位置權限。",
    locationUnavailable: "目前無法取得位置訊號，請稍後再試。",
    locationTimeout: "定位逾時，請移動至訊號較佳處重試。",
    locationUnknownError: "定位失敗，請稍後重試。",
    trackingStarted: "即時追蹤已啟動。",
    trackingStopped: "即時追蹤已停止。",
    needLocation: "請先取得目前位置再送出打卡。",
    needNoteOrPhoto: "請至少填寫筆記或上傳一張照片。",
    tooManyPhotos: "照片數量超過限制（最多 2 張）。",
    invalidPhotoType: "僅支援 JPG / PNG / WEBP 圖片。",
    photoTooLarge: "圖片過大，單張請勿超過 2MB。",
    analyzing: "AI 分析中...",
    checkinSaved: "打卡已儲存，並更新至地圖與最新動態。",
    analyzeFailed: "處理失敗，請稍後重試。",
    remoteAiFallback: "遠端 AI 無法連線，已改用本機示範辨識。",
    resultEmpty: "上傳照片並送出打卡後，這裡會顯示辨識結果。",
    sourceLabel: "辨識來源",
    sourceDemo: "本機示範 AI",
    sourceRemote: "遠端 AI",
    confidenceLabel: "信心值",
    scientificNameLabel: "學名",
    statusLabel: "保育狀態",
    habitatLabel: "棲地",
    threatsLabel: "主要威脅",
    actionsLabel: "建議行動",
    traitsLabel: "關鍵外觀",
    lowConfidence: "信心值偏低，請再上傳更清晰照片或比對專家資料。",
    unknownSpecies: "未確定物種",
    noPhotoProvided: "未上傳照片",
    feedEmpty: "目前還沒有打卡紀錄。",
    viewOnMap: "在地圖定位",
    youAreHere: "你的位置",
    clearConfirm: "確定要清除所有本機打卡資料嗎？",
    clearedDone: "本機紀錄已清除。",
    gmailTitle: "Gmail 自動整理",
    gmailPrivacyHint: "安全說明：Google 不允許無 API 讀取 Gmail；本功能使用官方 OAuth 授權與 Gmail API，只讀取信件摘要。",
    gmailLoginBtn: "登入 Gmail",
    gmailRefreshBtn: "重新整理",
    gmailLogoutBtn: "登出",
    gmailIdle: "尚未連接 Gmail。",
    gmailNeedClientId: "請先在 APP_CONFIG 設定 gmailClientId。",
    gmailScriptMissing: "Google 登入 SDK 尚未載入，請稍後重試。",
    gmailSigningIn: "正在請求 Gmail 授權...",
    gmailSignedIn: "已連接 Gmail，正在同步信件。",
    gmailSignedOut: "已登出 Gmail。",
    gmailLoading: "同步 Gmail 信件中...",
    gmailLoadFailed: "無法取得 Gmail 資料，請稍後重試。",
    gmailTokenExpired: "授權已過期，請重新登入 Gmail。",
    gmailNoMessages: "目前沒有可顯示的信件。",
    gmailSubjectEmpty: "（無主旨）",
    gmailSummaryTotal: "總信件",
    gmailSummaryUnread: "未讀",
    gmailSummaryLastSync: "最後同步",
    gmailAutoRefreshReady: "已啟用自動同步。"
  },
  en: {
    appTitle: "Duck & Island Eco Guardian",
    appSubtitle: "Geo check-ins, photo ID, and conservation action tips",
    clearDataBtn: "Clear Local Records",
    checkinTitle: "Eco Check-in",
    notesLabel: "Observation Notes",
    notesPlaceholder: "Example: Two ducks were feeding in the intertidal zone",
    tagsLabel: "Tags (comma separated)",
    tagsPlaceholder: "wetland, coast, birds",
    getLocationBtn: "Use Current Location",
    startTrackingBtn: "Start Live Tracking",
    stopTrackingBtn: "Stop Live Tracking",
    latitudeLabel: "Latitude",
    longitudeLabel: "Longitude",
    photoLabel: "Upload Observation Photos",
    submitBtn: "Analyze and Save Check-in",
    mapTitle: "Live Map",
    mapLeaflet: "Leaflet Map",
    mapGoogle: "Google Map",
    resultTitle: "AI Identification",
    feedTitle: "Recent Check-ins",
    privacyNotice:
      "Privacy notice: location is requested only with permission, and photos/check-ins are stored in this browser only (LocalStorage).",
    uploadHint: "Up to 2 photos, each <= 2MB, formats: JPG / PNG / WEBP.",
    mapLoading: "Loading map...",
    mapReady: "Map is ready. Please capture your location first.",
    mapFallback: "Map tiles failed. Switching to a backup layer...",
    mapTileError: "Unable to load the map. Check your network and retry.",
    mapLibError: "Map library failed to load. Please refresh.",
    placeDetailBtn: "Learn more",
    placeSummaryMissing: "No description available for this place yet.",
    hotspotBirdsTitle: "Representative Birds",
    hotspotWetlandTitle: "Wetland Ecology",
    hotspotPopulationLabel: "Population Trend",
    hotspotDietLabel: "Diet",
    hotspotNicheLabel: "Ecological Niche",
    hotspotHydrologyLabel: "Hydrology",
    hotspotPlantLabel: "Dominant Plants",
    hotspotThreatLabel: "Key Threats",
    hotspotActionLabel: "Conservation Actions",
    hotspotOpenBirdDetail: "Open Full Bird Detail Page",
    hotspotTitle: "Wetland Hotspots",
    hotspotHint: "Tap/click hotspot markers on the map to view birds and wetland science details.",
    hotspotDetailEmpty: "Select a hotspot to view scientific details.",
    locating: "Getting location...",
    locationUpdated: "Location updated.",
    locationPermissionDenied: "Location permission denied. Please allow location access.",
    locationUnavailable: "Location unavailable. Try again in a moment.",
    locationTimeout: "Location request timed out. Try from an open area.",
    locationUnknownError: "Location failed. Please try again.",
    trackingStarted: "Live tracking started.",
    trackingStopped: "Live tracking stopped.",
    needLocation: "Capture your location before submitting a check-in.",
    needNoteOrPhoto: "Please provide either notes or at least one photo.",
    tooManyPhotos: "Too many photos (maximum: 2).",
    invalidPhotoType: "Only JPG / PNG / WEBP images are supported.",
    photoTooLarge: "Photo is too large. Each image must be <= 2MB.",
    analyzing: "Analyzing with AI...",
    checkinSaved: "Check-in saved and added to map/feed.",
    analyzeFailed: "Something went wrong. Please try again.",
    remoteAiFallback: "Remote AI unavailable, switched to local demo recognition.",
    resultEmpty: "Submit a photo check-in to see AI identification here.",
    sourceLabel: "Inference Source",
    sourceDemo: "Local Demo AI",
    sourceRemote: "Remote AI",
    confidenceLabel: "Confidence",
    scientificNameLabel: "Scientific Name",
    statusLabel: "Conservation Status",
    habitatLabel: "Habitat",
    threatsLabel: "Threats",
    actionsLabel: "Recommended Actions",
    traitsLabel: "Key Traits",
    lowConfidence: "Low confidence result. Upload a clearer photo and validate with experts.",
    unknownSpecies: "Unconfirmed species",
    noPhotoProvided: "No photo provided",
    feedEmpty: "No check-ins yet.",
    viewOnMap: "Locate on Map",
    youAreHere: "Your location",
    clearConfirm: "Clear all local check-in data?",
    clearedDone: "Local records cleared.",
    gmailTitle: "Gmail Auto Inbox",
    gmailPrivacyHint: "Security note: Google does not allow Gmail access without APIs. This module uses official OAuth + Gmail API (read-only message summaries).",
    gmailLoginBtn: "Sign in Gmail",
    gmailRefreshBtn: "Refresh",
    gmailLogoutBtn: "Sign out",
    gmailIdle: "Not connected to Gmail yet.",
    gmailNeedClientId: "Please set gmailClientId in APP_CONFIG first.",
    gmailScriptMissing: "Google Identity SDK is not ready yet. Please retry.",
    gmailSigningIn: "Requesting Gmail authorization...",
    gmailSignedIn: "Gmail connected, syncing messages.",
    gmailSignedOut: "Signed out from Gmail.",
    gmailLoading: "Syncing Gmail messages...",
    gmailLoadFailed: "Unable to fetch Gmail data. Please retry.",
    gmailTokenExpired: "Authorization expired. Please sign in again.",
    gmailNoMessages: "No messages available.",
    gmailSubjectEmpty: "(No subject)",
    gmailSummaryTotal: "Total",
    gmailSummaryUnread: "Unread",
    gmailSummaryLastSync: "Last Sync",
    gmailAutoRefreshReady: "Auto sync is enabled."
  }
};

const HOTSPOTS = [
  {
    id: "yuen_long_north",
    coords: [22.4719, 114.0308],
    siteName: {
      zh: "元朗北發展區",
      en: "Yuen Long North Development Area"
    },
    subtitle: {
      zh: "后海灣內陸濕地交界帶",
      en: "Inner Deep Bay wetland transition zone"
    },
    birds: [
      {
        commonName: {
          zh: "黑臉琵鷺",
          en: "Black-faced Spoonbill"
        },
        scientificName: "Platalea minor",
        population: {
          zh: "全球瀕危，東亞遷徙族群",
          en: "Globally endangered, East Asian migratory population"
        },
        diet: {
          zh: "小魚、甲殼類與底棲無脊椎動物",
          en: "Small fish, crustaceans, and benthic invertebrates"
        },
        niche: {
          zh: "淺水掃喙覓食，依賴潮汐泥灘與魚塘水位管理",
          en: "Tactile feeder in shallow waters, dependent on mudflats and fishpond water management"
        }
      },
      {
        commonName: {
          zh: "針尾鴨",
          en: "Northern Pintail"
        },
        scientificName: "Anas acuta",
        population: {
          zh: "候鳥族群季節性波動",
          en: "Seasonally fluctuating migratory flocks"
        },
        diet: {
          zh: "水生植物種子、嫩芽與小型無脊椎",
          en: "Aquatic seeds, shoots, and small invertebrates"
        },
        niche: {
          zh: "利用淺灘與積水農地作停棲與補食",
          en: "Uses shallow flats and flooded farmlands for roosting and refueling"
        }
      },
      {
        commonName: {
          zh: "小白鷺",
          en: "Little Egret"
        },
        scientificName: "Egretta garzetta",
        population: {
          zh: "本地常見，對干擾敏感",
          en: "Locally common but sensitive to disturbance"
        },
        diet: {
          zh: "小魚、蝦與兩棲幼體",
          en: "Small fish, shrimp, and amphibian larvae"
        },
        niche: {
          zh: "作為中層掠食者，連結魚塘與潮間帶食物網",
          en: "Mid-level predator linking fishpond and intertidal food webs"
        }
      }
    ],
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
    }
  },
  {
    id: "mai_po_wetland_park",
    coords: [22.4953, 114.0397],
    siteName: {
      zh: "香港米埔濕地公園",
      en: "Hong Kong Mai Po Wetland Park"
    },
    subtitle: {
      zh: "拉姆薩爾濕地核心區與候鳥熱點",
      en: "Core Ramsar wetland zone and migratory bird hotspot"
    },
    birds: [
      {
        commonName: {
          zh: "黑臉琵鷺",
          en: "Black-faced Spoonbill"
        },
        scientificName: "Platalea minor",
        population: {
          zh: "東亞遷徙路徑關鍵越冬族群",
          en: "Key wintering population on the East Asian flyway"
        },
        diet: {
          zh: "魚蝦與泥灘底棲生物",
          en: "Fish, shrimp, and mudflat benthos"
        },
        niche: {
          zh: "指標物種，可反映泥灘生產力與水質狀態",
          en: "Indicator species reflecting mudflat productivity and water quality"
        }
      },
      {
        commonName: {
          zh: "小青足鷸",
          en: "Common Greenshank"
        },
        scientificName: "Tringa nebularia",
        population: {
          zh: "遷徙季節常見涉禽",
          en: "Common migratory wader during passage seasons"
        },
        diet: {
          zh: "小型魚類、軟體動物與環節動物",
          en: "Small fish, mollusks, and annelids"
        },
        niche: {
          zh: "利用潮差暴露泥灘覓食，連結潮汐能量轉換",
          en: "Forages on exposed mudflats, linking tidal energy to higher trophic levels"
        }
      },
      {
        commonName: {
          zh: "反嘴鷸",
          en: "Pied Avocet"
        },
        scientificName: "Recurvirostra avosetta",
        population: {
          zh: "冬候鳥族群具保育關注價值",
          en: "Wintering flocks with high conservation interest"
        },
        diet: {
          zh: "水生昆蟲幼生與甲殼類",
          en: "Aquatic insect larvae and crustaceans"
        },
        niche: {
          zh: "彎喙掃食策略可利用淺水邊緣微棲地",
          en: "Sweeping feeding strategy exploits shallow-edge microhabitats"
        }
      }
    ],
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
    }
  }
];

const state = {
  language: "zh",
  mapProvider: "leaflet",
  map: null,
  checkins: [],
  markerById: new Map(),
  leafletCheckinMarkers: [],
  googleCheckinMarkers: [],
  googleInfoWindows: [],
  places: [],
  placeMarkerById: new Map(),
  leafletPlaceMarkers: [],
  googlePlaceMarkers: [],
  googlePlaceInfoWindows: [],
  hotspotMarkersLeaflet: [],
  hotspotMarkersGoogle: [],
  selectedHotspotId: null,
  currentGoogleMarker: null,
  trackingWatchId: null,
  latestResult: null,
  gmailToken: "",
  gmailMessages: [],
  gmailProfile: null,
  gmailLastSync: null,
  gmailTokenClient: null,
  gmailAutoRefreshTimer: null
};

const dom = {};

window.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheDom();
  bindEvents();
  loadPreferences();
  loadCheckins();
  loadGmailCache();
  applyI18n();
  renderResultCard(state.latestResult);
  renderFeed();
  initGmailModule();
  await loadPlaces();
  await initMap();
  renderCheckinMarkers();
  renderPlaceMarkers();
  renderHotspotMarkers();
}

function cacheDom() {
  dom.langToggleBtn = document.getElementById("langToggleBtn");
  dom.clearDataBtn = document.getElementById("clearDataBtn");
  dom.checkinForm = document.getElementById("checkinForm");
  dom.notesInput = document.getElementById("notesInput");
  dom.tagsInput = document.getElementById("tagsInput");
  dom.getLocationBtn = document.getElementById("getLocationBtn");
  dom.trackingBtn = document.getElementById("trackingBtn");
  dom.latInput = document.getElementById("latInput");
  dom.lngInput = document.getElementById("lngInput");
  dom.photoInput = document.getElementById("photoInput");
  dom.submitBtn = document.getElementById("submitBtn");
  dom.privacyNotice = document.getElementById("privacyNotice");
  dom.uploadHint = document.getElementById("uploadHint");
  dom.locationStatus = document.getElementById("locationStatus");
  dom.mapProviderBadge = document.getElementById("mapProviderBadge");
  dom.aiResultCard = document.getElementById("aiResultCard");
  dom.feedList = document.getElementById("feedList");
  dom.gmailPrivacyHint = document.getElementById("gmailPrivacyHint");
  dom.gmailLoginBtn = document.getElementById("gmailLoginBtn");
  dom.gmailRefreshBtn = document.getElementById("gmailRefreshBtn");
  dom.gmailLogoutBtn = document.getElementById("gmailLogoutBtn");
  dom.gmailStatus = document.getElementById("gmailStatus");
  dom.gmailSummary = document.getElementById("gmailSummary");
  dom.gmailList = document.getElementById("gmailList");
  dom.hotspotList = document.getElementById("hotspotList");
  dom.hotspotDetail = document.getElementById("hotspotDetail");
  dom.hotspotHint = document.getElementById("hotspotHint");
}

function bindEvents() {
  dom.langToggleBtn?.addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem(LANG_KEY, state.language);
    applyI18n();
    renderResultCard(state.latestResult);
    renderFeed();
    renderCheckinMarkers();
    renderPlaceMarkers();
    renderHotspotMarkers();
  });

  dom.clearDataBtn?.addEventListener("click", () => {
    if (!window.confirm(t("clearConfirm"))) {
      return;
    }

    state.checkins = [];
    state.latestResult = null;
    persistCheckins();
    renderFeed();
    renderCheckinMarkers();
    renderResultCard(null);
    setStatus("", t("clearedDone"));
  });

  dom.getLocationBtn?.addEventListener("click", requestCurrentLocation);
  dom.trackingBtn?.addEventListener("click", toggleTracking);
  dom.checkinForm?.addEventListener("submit", handleCheckinSubmit);
  dom.feedList?.addEventListener("click", onFeedClick);
  dom.gmailLoginBtn?.addEventListener("click", handleGmailLogin);
  dom.gmailRefreshBtn?.addEventListener("click", () => refreshGmailData(true));
  dom.gmailLogoutBtn?.addEventListener("click", handleGmailLogout);
  dom.hotspotList?.addEventListener("click", onHotspotListClick);
}

function loadPreferences() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "zh" || saved === "en") {
    state.language = saved;
  }
}

function loadCheckins() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      state.checkins = parsed;
      if (state.checkins[0]?.aiResult) {
        state.latestResult = state.checkins[0].aiResult;
      }
    }
  } catch (error) {
    console.error("Unable to load checkins", error);
  }
}

function loadGmailCache() {
  try {
    const raw = localStorage.getItem(GMAIL_CACHE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state.gmailProfile = parsed.profile || null;
      state.gmailMessages = Array.isArray(parsed.messages) ? parsed.messages : [];
      state.gmailLastSync = parsed.lastSync || null;
    }
  } catch (error) {
    console.error("Unable to load gmail cache", error);
  }
}

async function loadPlaces() {
  try {
    const response = await fetch(PLACES_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Places request failed: ${response.status}`);
    }
    const payload = await response.json();
    if (Array.isArray(payload)) {
      state.places = payload;
    } else if (Array.isArray(payload?.places)) {
      state.places = payload.places;
    } else {
      state.places = [];
    }
  } catch (error) {
    console.warn("Unable to load places data", error);
    state.places = [];
  }
}

function persistCheckins() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.checkins));
}

function persistGmailCache() {
  const payload = {
    profile: state.gmailProfile,
    messages: state.gmailMessages,
    lastSync: state.gmailLastSync
  };
  localStorage.setItem(GMAIL_CACHE_KEY, JSON.stringify(payload));
}

function applyI18n() {
  const dict = I18N[state.language];
  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dict[key]) {
      node.setAttribute("placeholder", dict[key]);
    }
  });

  dom.langToggleBtn.textContent = state.language === "zh" ? "English" : "繁中";
  dom.privacyNotice.textContent = t("privacyNotice");
  dom.uploadHint.textContent = t("uploadHint");
  dom.gmailPrivacyHint.textContent = t("gmailPrivacyHint");

  if (!dom.locationStatus.dataset.raw) {
    setStatus("mapReady");
  } else {
    setStatus("", dom.locationStatus.dataset.raw);
  }

  if (!dom.gmailStatus.dataset.raw) {
    setGmailStatus(state.gmailToken ? "gmailSignedIn" : "gmailIdle");
  } else {
    setGmailStatus("", dom.gmailStatus.dataset.raw);
  }

  updateTrackingButtonText();
  updateMapProviderBadge();
  updateGmailButtons();
  renderGmailSummary();
  renderGmailList();
}

function t(key) {
  return I18N[state.language][key] || key;
}

function setStatus(i18nKey, rawText = "") {
  if (i18nKey) {
    dom.locationStatus.textContent = t(i18nKey);
    delete dom.locationStatus.dataset.raw;
    return;
  }

  dom.locationStatus.textContent = rawText;
  if (rawText) {
    dom.locationStatus.dataset.raw = rawText;
  } else {
    delete dom.locationStatus.dataset.raw;
  }
}

function setGmailStatus(i18nKey, rawText = "") {
  if (i18nKey) {
    dom.gmailStatus.textContent = t(i18nKey);
    delete dom.gmailStatus.dataset.raw;
    return;
  }

  dom.gmailStatus.textContent = rawText;
  if (rawText) {
    dom.gmailStatus.dataset.raw = rawText;
  } else {
    delete dom.gmailStatus.dataset.raw;
  }
}

function initGmailModule() {
  renderGmailSummary();
  renderGmailList();
  updateGmailButtons();
  setGmailStatus("gmailIdle");
}

function updateGmailButtons() {
  const hasToken = Boolean(state.gmailToken);
  dom.gmailRefreshBtn.disabled = !hasToken;
  dom.gmailLogoutBtn.disabled = !hasToken;
  dom.gmailLoginBtn.disabled = false;
}

function getGmailConfig() {
  const config = window.APP_CONFIG || {};
  return {
    clientId: String(config.gmailClientId || "").trim(),
    maxResults: clamp(Number(config.gmailMaxResults) || 10, 1, 20),
    autoRefreshMs: Math.max(30000, Number(config.gmailAutoRefreshMs) || 180000)
  };
}

function isGoogleIdentityReady() {
  return Boolean(window.google && window.google.accounts && window.google.accounts.oauth2);
}

function handleGmailLogin() {
  const gmailConfig = getGmailConfig();
  if (!gmailConfig.clientId) {
    setGmailStatus("gmailNeedClientId");
    return;
  }

  if (!isGoogleIdentityReady()) {
    setGmailStatus("gmailScriptMissing");
    return;
  }

  setGmailStatus("gmailSigningIn");
  dom.gmailLoginBtn.disabled = true;

  state.gmailTokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: gmailConfig.clientId,
    scope: GMAIL_SCOPE,
    callback: async (tokenResponse) => {
      dom.gmailLoginBtn.disabled = false;

      if (!tokenResponse || tokenResponse.error || !tokenResponse.access_token) {
        const errorMessage = tokenResponse?.error ? `OAuth Error: ${tokenResponse.error}` : t("gmailLoadFailed");
        setGmailStatus("", errorMessage);
        return;
      }

      state.gmailToken = tokenResponse.access_token;
      updateGmailButtons();
      setGmailStatus("gmailSignedIn");
      scheduleGmailAutoRefresh();
      await refreshGmailData(true);
    }
  });

  const promptMode = state.gmailToken ? "" : "consent";
  state.gmailTokenClient.requestAccessToken({ prompt: promptMode });
}

async function refreshGmailData(manualTrigger = false) {
  if (!state.gmailToken) {
    setGmailStatus("gmailIdle");
    updateGmailButtons();
    return;
  }

  setGmailStatus("gmailLoading");

  try {
    const gmailConfig = getGmailConfig();
    const profile = await fetchGmailJson("/users/me/profile");
    const messageList = await fetchGmailJson(`/users/me/messages?maxResults=${gmailConfig.maxResults}`);
    const messageRefs = Array.isArray(messageList.messages) ? messageList.messages : [];

    const details = await Promise.all(
      messageRefs.map((messageRef) => {
        const path = `/users/me/messages/${encodeURIComponent(
          messageRef.id
        )}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date`;
        return fetchGmailJson(path);
      })
    );

    state.gmailProfile = {
      emailAddress: profile.emailAddress || "",
      messagesTotal: Number(profile.messagesTotal || 0),
      threadsTotal: Number(profile.threadsTotal || 0)
    };
    state.gmailMessages = details.map(parseGmailMessage).filter(Boolean);
    state.gmailLastSync = new Date().toISOString();

    persistGmailCache();
    renderGmailSummary();
    renderGmailList();

    if (manualTrigger) {
      setGmailStatus("gmailSignedIn");
    } else {
      setGmailStatus("gmailAutoRefreshReady");
    }
  } catch (error) {
    console.error("Gmail sync failed", error);
    if (error instanceof Error && error.message === "GMAIL_TOKEN_EXPIRED") {
      stopGmailAutoRefresh();
      state.gmailToken = "";
      updateGmailButtons();
      setGmailStatus("gmailTokenExpired");
      return;
    }
    setGmailStatus("gmailLoadFailed");
  }
}

async function fetchGmailJson(path) {
  const response = await fetch(`https://gmail.googleapis.com/gmail/v1${path}`, {
    headers: {
      Authorization: `Bearer ${state.gmailToken}`
    }
  });

  if (response.status === 401) {
    throw new Error("GMAIL_TOKEN_EXPIRED");
  }

  if (!response.ok) {
    throw new Error(`GMAIL_HTTP_${response.status}`);
  }

  return response.json();
}

function parseGmailMessage(message) {
  const headers = message?.payload?.headers || [];
  const from = getHeaderValue(headers, "From") || "-";
  const subject = getHeaderValue(headers, "Subject") || t("gmailSubjectEmpty");
  const date = getHeaderValue(headers, "Date") || "";

  return {
    id: message?.id || generateId(),
    from,
    subject,
    date,
    snippet: message?.snippet || "",
    isUnread: Array.isArray(message?.labelIds) && message.labelIds.includes("UNREAD")
  };
}

function getHeaderValue(headers, targetName) {
  const found = headers.find((header) =>
    String(header?.name || "").toLowerCase() === String(targetName).toLowerCase()
  );
  return found?.value || "";
}

function renderGmailSummary() {
  const totalCount =
    Number(state.gmailProfile?.messagesTotal || 0) || Number(state.gmailMessages.length || 0);
  const unreadCount = state.gmailMessages.reduce((sum, item) => sum + (item.isUnread ? 1 : 0), 0);
  const lastSync = state.gmailLastSync ? formatDate(state.gmailLastSync) : "-";

  dom.gmailSummary.innerHTML = `
    <div class="gmail-chip">
      <p class="gmail-chip-title">${escapeHtml(t("gmailSummaryTotal"))}</p>
      <p class="gmail-chip-value">${escapeHtml(totalCount)}</p>
    </div>
    <div class="gmail-chip">
      <p class="gmail-chip-title">${escapeHtml(t("gmailSummaryUnread"))}</p>
      <p class="gmail-chip-value">${escapeHtml(unreadCount)}</p>
    </div>
    <div class="gmail-chip">
      <p class="gmail-chip-title">${escapeHtml(t("gmailSummaryLastSync"))}</p>
      <p class="gmail-chip-value">${escapeHtml(lastSync)}</p>
    </div>
  `;
}

function renderGmailList() {
  if (!state.gmailMessages.length) {
    dom.gmailList.innerHTML = `<li class="gmail-empty">${escapeHtml(t("gmailNoMessages"))}</li>`;
    return;
  }

  dom.gmailList.innerHTML = state.gmailMessages
    .map((message) => {
      return `
        <li class="gmail-item">
          <div class="gmail-head">
            <span class="gmail-from">${escapeHtml(message.from)}</span>
            <span class="gmail-date">${escapeHtml(formatGmailDate(message.date))}</span>
          </div>
          <p class="gmail-subject">${escapeHtml(message.subject)}</p>
          <p class="gmail-snippet">${escapeHtml(message.snippet || "-")}</p>
        </li>
      `;
    })
    .join("");
}

function formatGmailDate(rawDate) {
  if (!rawDate) {
    return "-";
  }

  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) {
    return rawDate;
  }

  return parsed.toLocaleString(state.language === "zh" ? "zh-HK" : "en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function scheduleGmailAutoRefresh() {
  stopGmailAutoRefresh();

  if (!state.gmailToken) {
    return;
  }

  const gmailConfig = getGmailConfig();
  state.gmailAutoRefreshTimer = window.setInterval(() => {
    void refreshGmailData(false);
  }, gmailConfig.autoRefreshMs);
}

function stopGmailAutoRefresh() {
  if (state.gmailAutoRefreshTimer !== null) {
    window.clearInterval(state.gmailAutoRefreshTimer);
    state.gmailAutoRefreshTimer = null;
  }
}

function handleGmailLogout() {
  stopGmailAutoRefresh();

  if (state.gmailToken && isGoogleIdentityReady()) {
    try {
      window.google.accounts.oauth2.revoke(state.gmailToken, () => {});
    } catch (error) {
      console.warn("Unable to revoke Gmail token", error);
    }
  }

  state.gmailToken = "";
  state.gmailMessages = [];
  state.gmailProfile = null;
  state.gmailLastSync = null;
  persistGmailCache();

  renderGmailSummary();
  renderGmailList();
  updateGmailButtons();
  setGmailStatus("gmailSignedOut");
}

function updateMapProviderBadge() {
  dom.mapProviderBadge.textContent = state.mapProvider === "google" ? t("mapGoogle") : t("mapLeaflet");
}

function getPlacesCenter() {
  if (!Array.isArray(state.places) || !state.places.length) {
    return null;
  }

  const preferred = state.places.find((place) => place?.isDefault);
  const target = preferred || state.places[0];
  return getPlaceLatLng(target);
}

async function initMap() {
  const config = window.APP_CONFIG || {};
  const fallbackCenter = toLatLng(config.mapDefaultCenter) || [22.3193, 114.1694];
  const placesCenter = getPlacesCenter();
  const center = placesCenter || fallbackCenter;
  const defaultZoom = Number(config.mapDefaultZoom) || 11;
  const placesZoom = Number(config.mapPlacesZoom) || defaultZoom;
  const zoom = placesCenter ? placesZoom : defaultZoom;

  setStatus("mapLoading");

  if (config.googleMapsApiKey && config.googleMapsApiKey.trim()) {
    try {
      await loadGoogleMaps(config.googleMapsApiKey.trim());
      initGoogleMap(center, zoom);
      state.mapProvider = "google";
      updateMapProviderBadge();
      setStatus("mapReady");
      return;
    } catch (error) {
      console.warn("Google Maps unavailable, fallback to Leaflet", error);
    }
  }

  const leafletReady = await ensureLeafletLoaded();
  if (!leafletReady) {
    setStatus("mapLibError");
    return;
  }

  initLeafletMap(center, zoom);
  state.mapProvider = "leaflet";
  updateMapProviderBadge();
  setStatus("mapReady");
}

function toLatLng(value) {
  if (!Array.isArray(value) || value.length !== 2) {
    return null;
  }

  const lat = Number(value[0]);
  const lng = Number(value[1]);
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return null;
  }

  return [lat, lng];
}

function loadGoogleMaps(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(script);
  });
}

function loadLeafletAssets(jsUrl, cssUrl) {
  return new Promise((resolve, reject) => {
    if (cssUrl && !document.querySelector("link[data-leaflet]") ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      link.setAttribute("data-leaflet", "true");
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = jsUrl;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Leaflet script failed to load"));
    document.head.appendChild(script);
  });
}

async function ensureLeafletLoaded() {
  if (window.L) {
    return true;
  }

  const candidates = [
    {
      js: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
      css: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    },
    {
      js: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js",
      css: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css"
    },
    {
      js: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js",
      css: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
    }
  ];

  for (const candidate of candidates) {
    try {
      await loadLeafletAssets(candidate.js, candidate.css);
      if (window.L) {
        return true;
      }
    } catch (error) {
      console.warn("Leaflet CDN failed:", candidate.js, error);
    }
  }

  return false;
}

function initLeafletMap(center, zoom) {
  if (!window.L) {
    setStatus("mapLibError");
    return;
  }

  state.map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView(center, zoom);

  const createOfflineLayer = () => {
    const OfflineLayer = L.GridLayer.extend({
      createTile: function () {
        const tile = document.createElement("canvas");
        const size = this.getTileSize();
        tile.width = size.x;
        tile.height = size.y;
        const ctx = tile.getContext("2d");
        ctx.fillStyle = "#f4faf7";
        ctx.fillRect(0, 0, size.x, size.y);
        ctx.strokeStyle = "#cfe4db";
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, size.x, size.y);
        ctx.fillStyle = "#90a9a1";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("OFFLINE MAP", size.x / 2, size.y / 2);
        return tile;
      }
    });
    return new OfflineLayer();
  };

  const providers = [
    {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      options: {
        maxZoom: 19,
        maxNativeZoom: 19,
        subdomains: "abcd",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    },
    {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      options: {
        maxZoom: 19,
        maxNativeZoom: 18,
        subdomains: "abcd",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    },
    {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      options: {
        maxZoom: 19,
        subdomains: "abc",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      options: {
        maxZoom: 19,
        attribution: "Tiles &copy; Esri"
      },
      overlayUrls: [
        "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
        "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
      ],
      overlayOptions: {
        maxZoom: 19,
        opacity: 0.95,
        attribution: "Tiles &copy; Esri"
      }
    },
    {
      layer: createOfflineLayer()
    }
  ];

  let activeLayer = null;
  let activeOverlay = null;
  let fallbackNotified = false;

  const loadProvider = (index) => {
    const provider = providers[index];
    if (!provider) {
      setStatus("mapTileError");
      return;
    }

    if (activeLayer) {
      activeLayer.off();
      state.map.removeLayer(activeLayer);
    }

    if (activeOverlay) {
      activeOverlay.off();
      state.map.removeLayer(activeOverlay);
      activeOverlay = null;
    }

    if (provider.layer) {
      if (!fallbackNotified) {
        setStatus("mapFallback");
        fallbackNotified = true;
      }
      activeLayer = provider.layer;
      activeLayer.addTo(state.map);
      return;
    }

    let errorCount = 0;
    activeLayer = L.tileLayer(provider.url, provider.options);
    activeLayer.on("tileerror", () => {
      errorCount += 1;
      if (errorCount >= 3) {
        if (!fallbackNotified) {
          setStatus("mapFallback");
          fallbackNotified = true;
        }
        loadProvider(index + 1);
      }
    });
    activeLayer.addTo(state.map);

    if (provider.overlayUrls && provider.overlayUrls.length > 0) {
      const overlays = provider.overlayUrls.map((url) => L.tileLayer(url, provider.overlayOptions || {}));
      activeOverlay = L.layerGroup(overlays);
      activeOverlay.addTo(state.map);
    }
  };

  loadProvider(0);
  state.map.whenReady(() => state.map.invalidateSize());
}

function initGoogleMap(center, zoom) {
  state.map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: center[0], lng: center[1] },
    zoom,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  });
}

function requestCurrentLocation() {
  if (!navigator.geolocation) {
    setStatus("", "Geolocation API is not supported by this browser.");
    return;
  }

  setStatus("locating");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      applyLocation(position.coords.latitude, position.coords.longitude);
      setStatus("locationUpdated");
    },
    (error) => {
      handleGeoError(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 5000,
      timeout: 12000
    }
  );
}

function toggleTracking() {
  if (!navigator.geolocation) {
    setStatus("", "Geolocation API is not supported by this browser.");
    return;
  }

  if (state.trackingWatchId !== null) {
    navigator.geolocation.clearWatch(state.trackingWatchId);
    state.trackingWatchId = null;
    updateTrackingButtonText();
    setStatus("trackingStopped");
    return;
  }

  state.trackingWatchId = navigator.geolocation.watchPosition(
    (position) => {
      applyLocation(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      handleGeoError(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 3000,
      timeout: 12000
    }
  );

  updateTrackingButtonText();
  setStatus("trackingStarted");
}

function updateTrackingButtonText() {
  const key = state.trackingWatchId === null ? "startTrackingBtn" : "stopTrackingBtn";
  dom.trackingBtn.textContent = t(key);
}

function handleGeoError(error) {
  if (!error) {
    setStatus("locationUnknownError");
    return;
  }

  if (error.code === error.PERMISSION_DENIED) {
    setStatus("locationPermissionDenied");
    return;
  }

  if (error.code === error.POSITION_UNAVAILABLE) {
    setStatus("locationUnavailable");
    return;
  }

  if (error.code === error.TIMEOUT) {
    setStatus("locationTimeout");
    return;
  }

  setStatus("locationUnknownError");
}

function applyLocation(lat, lng) {
  const latitude = Number(lat);
  const longitude = Number(lng);

  state.currentLocation = { lat: latitude, lng: longitude };
  dom.latInput.value = latitude.toFixed(6);
  dom.lngInput.value = longitude.toFixed(6);

  if (state.mapProvider === "leaflet") {
    if (!state.currentLeafletMarker) {
      state.currentLeafletMarker = L.circleMarker([latitude, longitude], {
        radius: 8,
        color: "#0a558c",
        weight: 2,
        fillColor: "#64c2ff",
        fillOpacity: 0.9
      }).addTo(state.map);
      state.currentLeafletMarker.bindTooltip(t("youAreHere"));
    } else {
      state.currentLeafletMarker.setLatLng([latitude, longitude]);
    }

    state.map.flyTo([latitude, longitude], Math.max(13, state.map.getZoom()), {
      duration: 0.9
    });
    return;
  }

  if (!state.currentGoogleMarker) {
    state.currentGoogleMarker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: state.map,
      title: t("youAreHere")
    });
  } else {
    state.currentGoogleMarker.setPosition({ lat: latitude, lng: longitude });
  }

  state.map.panTo({ lat: latitude, lng: longitude });
  if (state.map.getZoom() < 13) {
    state.map.setZoom(13);
  }
}

async function handleCheckinSubmit(event) {
  event.preventDefault();

  if (!state.currentLocation) {
    setStatus("needLocation");
    return;
  }

  const photoFiles = Array.from(dom.photoInput.files || []);
  const validation = validatePhotoFiles(photoFiles);
  if (!validation.ok) {
    setStatus("", validation.message);
    return;
  }

  const notes = dom.notesInput.value.trim();
  const tags = dom.tagsInput.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 8);

  if (!notes && photoFiles.length === 0) {
    setStatus("needNoteOrPhoto");
    return;
  }

  dom.submitBtn.disabled = true;
  dom.submitBtn.textContent = t("analyzing");

  try {
    const photos = await Promise.all(photoFiles.map((file) => fileToDataUrl(file)));
    const aiResult =
      photoFiles.length > 0 ? await recognizeSpecies(photoFiles[0]) : createNoPhotoResult();

    const checkin = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      notes,
      tags,
      lat: state.currentLocation.lat,
      lng: state.currentLocation.lng,
      photos,
      aiResult
    };

    state.checkins.unshift(checkin);
    state.checkins = state.checkins.slice(0, 120);
    state.latestResult = aiResult;

    persistCheckins();
    renderResultCard(aiResult);
    renderFeed();
    renderCheckinMarkers();

    dom.checkinForm.reset();
    setStatus("checkinSaved");
  } catch (error) {
    console.error("Check-in failed", error);
    setStatus("analyzeFailed");
  } finally {
    dom.submitBtn.disabled = false;
    dom.submitBtn.textContent = t("submitBtn");
  }
}

function validatePhotoFiles(photoFiles) {
  if (photoFiles.length > MAX_PHOTO_COUNT) {
    return { ok: false, message: t("tooManyPhotos") };
  }

  for (const file of photoFiles) {
    if (!ALLOWED_TYPES.has(file.type)) {
      return { ok: false, message: t("invalidPhotoType") };
    }

    if (file.size > MAX_PHOTO_SIZE_BYTES) {
      return { ok: false, message: t("photoTooLarge") };
    }
  }

  return { ok: true };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read image file"));
    reader.readAsDataURL(file);
  });
}

async function recognizeSpecies(file) {
  const config = window.APP_CONFIG || {};
  if (config.aiEndpoint && config.aiEndpoint.trim()) {
    try {
      const remote = await callRemoteAi(file, config.aiEndpoint.trim(), config.aiApiKey || "");
      return normalizeAiResult(remote, "remote");
    } catch (error) {
      console.warn("Remote AI failed. Falling back to local demo inference.", error);
      setStatus("remoteAiFallback");
    }
  }

  return localDemoInference(file.name);
}

async function callRemoteAi(file, endpoint, apiKey) {
  const dataUrl = await fileToDataUrl(file);
  const base64 = String(dataUrl).split(",")[1] || "";
  const headers = {
    "Content-Type": "application/json"
  };

  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      imageBase64: base64,
      fileName: file.name,
      mimeType: file.type
    })
  });

  if (!response.ok) {
    throw new Error(`AI endpoint error: ${response.status}`);
  }

  return response.json();
}

function normalizeAiResult(raw, sourceType) {
  const rawText = `${raw?.commonName || ""} ${raw?.scientificName || ""} ${raw?.label || ""}`.toLowerCase();
  const matched = findSpeciesByText(rawText);
  const confidence = clamp(Number(raw?.confidence ?? raw?.score ?? 0.55), 0, 1);

  if (matched) {
    return {
      commonName: matched.commonName,
      scientificName: matched.scientificName,
      confidence,
      conservationStatus: raw?.conservationStatus || matched.conservationStatus,
      habitat: raw?.habitat || matched.habitat,
      threats: raw?.threats || matched.threats,
      recommendedActions: raw?.recommendedActions || matched.recommendedActions,
      traits: raw?.keyVisualTraits || matched.traits,
      source: sourceType
    };
  }

  return {
    commonName: {
      zh: raw?.commonName || raw?.label || t("unknownSpecies"),
      en: raw?.commonName || raw?.label || t("unknownSpecies")
    },
    scientificName: raw?.scientificName || "Unknown",
    confidence,
    conservationStatus: raw?.conservationStatus || "N/A",
    habitat: raw?.habitat || { zh: "需人工確認", en: "Needs human verification" },
    threats: raw?.threats || { zh: "需人工確認", en: "Needs human verification" },
    recommendedActions:
      raw?.recommendedActions || { zh: "請查詢在地專家資料", en: "Consult local experts" },
    traits: raw?.keyVisualTraits || {
      zh: ["照片特徵不足，請補充更多角度"],
      en: ["Insufficient visual details, upload more angles"]
    },
    source: sourceType
  };
}

function localDemoInference(fileName) {
  const normalizedName = String(fileName || "").toLowerCase();
  let winner = null;
  let maxScore = 0;

  for (const species of window.SPECIES_LIBRARY || []) {
    const score = species.keywords.reduce((sum, keyword) => {
      return sum + (normalizedName.includes(String(keyword).toLowerCase()) ? 1 : 0);
    }, 0);

    if (score > maxScore) {
      maxScore = score;
      winner = species;
    }
  }

  if (!winner) {
    const fallback = pickRandomSpecies();
    return {
      commonName: fallback.commonName,
      scientificName: fallback.scientificName,
      confidence: roundTo2(0.48 + Math.random() * 0.15),
      conservationStatus: fallback.conservationStatus,
      habitat: fallback.habitat,
      threats: fallback.threats,
      recommendedActions: fallback.recommendedActions,
      traits: fallback.traits,
      source: "demo"
    };
  }

  return {
    commonName: winner.commonName,
    scientificName: winner.scientificName,
    confidence: roundTo2(Math.min(0.95, 0.7 + maxScore * 0.1 + Math.random() * 0.08)),
    conservationStatus: winner.conservationStatus,
    habitat: winner.habitat,
    threats: winner.threats,
    recommendedActions: winner.recommendedActions,
    traits: winner.traits,
    source: "demo"
  };
}

function createNoPhotoResult() {
  return {
    commonName: {
      zh: t("noPhotoProvided"),
      en: t("noPhotoProvided")
    },
    scientificName: "N/A",
    confidence: 0,
    conservationStatus: "N/A",
    habitat: {
      zh: "未提供照片，因此沒有 AI 影像辨識結果。",
      en: "No photo uploaded, so no AI image recognition result is available."
    },
    threats: {
      zh: "請補上照片以獲得物種風險資訊。",
      en: "Upload a photo to receive species threat details."
    },
    recommendedActions: {
      zh: "下次建議拍攝清晰正面與側面照。",
      en: "Next time, capture clear frontal and side images."
    },
    traits: {
      zh: ["無照片可分析"],
      en: ["No image available for analysis"]
    },
    source: "demo"
  };
}

function renderResultCard(result) {
  if (!result) {
    dom.aiResultCard.classList.add("empty");
    dom.aiResultCard.innerHTML = `<p>${escapeHtml(t("resultEmpty"))}</p>`;
    return;
  }

  const confidencePercent = `${Math.round((result.confidence || 0) * 100)}%`;
  const localizedName = localizeField(result.commonName) || t("unknownSpecies");
  const traits = localizeArray(result.traits);
  const lowConfidence = (result.confidence || 0) > 0 && (result.confidence || 0) < 0.65;

  dom.aiResultCard.classList.remove("empty");
  dom.aiResultCard.innerHTML = `
    <h3 class="result-title">${escapeHtml(localizedName)}</h3>
    <p class="result-meta"><strong>${escapeHtml(t("sourceLabel"))}:</strong> ${escapeHtml(
      result.source === "remote" ? t("sourceRemote") : t("sourceDemo")
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("confidenceLabel"))}:</strong> ${escapeHtml(
      confidencePercent
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("scientificNameLabel"))}:</strong> ${escapeHtml(
      result.scientificName || "Unknown"
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("statusLabel"))}:</strong> ${escapeHtml(
      localizeField(result.conservationStatus) || "N/A"
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("habitatLabel"))}:</strong> ${escapeHtml(
      localizeField(result.habitat)
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("threatsLabel"))}:</strong> ${escapeHtml(
      localizeField(result.threats)
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("actionsLabel"))}:</strong> ${escapeHtml(
      localizeField(result.recommendedActions)
    )}</p>
    <p class="result-meta"><strong>${escapeHtml(t("traitsLabel"))}:</strong> ${escapeHtml(
      traits.join(" / ")
    )}</p>
    ${
      lowConfidence
        ? `<p class="result-warning">${escapeHtml(t("lowConfidence"))}</p>`
        : ""
    }
  `;
}

function renderFeed() {
  if (!state.checkins.length) {
    dom.feedList.innerHTML = `<li class="feed-empty">${escapeHtml(t("feedEmpty"))}</li>`;
    return;
  }

  dom.feedList.innerHTML = state.checkins
    .map((entry) => {
      const speciesName = localizeField(entry.aiResult?.commonName) || t("unknownSpecies");
      const tags = (entry.tags || [])
        .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join("");
      const thumbs = (entry.photos || [])
        .slice(0, 2)
        .map((src, index) => {
          return `<img class="feed-thumb" src="${escapeAttr(src)}" alt="photo-${index + 1}" />`;
        })
        .join("");

      return `
        <li class="feed-item">
          <div class="feed-row">
            <span class="feed-species">${escapeHtml(speciesName)}</span>
            <span class="feed-time">${escapeHtml(formatDate(entry.createdAt))}</span>
          </div>
          <p class="feed-note">${escapeHtml(entry.notes || "-")}</p>
          ${tags ? `<div class="feed-tags">${tags}</div>` : ""}
          ${thumbs ? `<div class="feed-images">${thumbs}</div>` : ""}
          <button class="feed-jump" data-action="jump" data-id="${escapeAttr(entry.id)}">${escapeHtml(
            t("viewOnMap")
          )}</button>
        </li>
      `;
    })
    .join("");
}

function onFeedClick(event) {
  const button = event.target.closest("button[data-action='jump']");
  if (!button) {
    return;
  }

  const id = button.dataset.id;
  const targetCheckin = state.checkins.find((entry) => entry.id === id);
  if (!targetCheckin) {
    return;
  }

  focusOnCheckin(targetCheckin);
}

function renderCheckinMarkers() {
  if (!state.map) {
    return;
  }

  state.markerById.clear();

  if (state.mapProvider === "leaflet") {
    clearLeafletMarkers();

    for (const entry of state.checkins) {
      const marker = L.marker([entry.lat, entry.lng]).addTo(state.map);
      marker.bindPopup(createPopupHtml(entry));
      state.leafletCheckinMarkers.push(marker);
      state.markerById.set(entry.id, marker);
    }

    return;
  }

  clearGoogleMarkers();

  for (const entry of state.checkins) {
    const marker = new google.maps.Marker({
      map: state.map,
      position: { lat: Number(entry.lat), lng: Number(entry.lng) }
    });

    const infoWindow = new google.maps.InfoWindow({ content: createPopupHtml(entry) });
    marker.addListener("click", () => infoWindow.open({ anchor: marker, map: state.map }));

    state.googleCheckinMarkers.push(marker);
    state.googleInfoWindows.push(infoWindow);
    state.markerById.set(entry.id, { marker, infoWindow });
  }
}

function renderPlaceMarkers() {
  if (!state.map) {
    return;
  }

  clearPlaceMarkers();

  if (!Array.isArray(state.places) || !state.places.length) {
    return;
  }

  if (state.mapProvider === "leaflet") {
    for (const place of state.places) {
      const latLng = getPlaceLatLng(place);
      if (!latLng) {
        continue;
      }

      const title = localizeField(place.name) || place.id || "";
      const marker = L.marker(latLng, { title });
      marker.bindPopup(createPlacePopupHtml(place));
      marker.addTo(state.map);
      state.leafletPlaceMarkers.push(marker);
      state.placeMarkerById.set(place.id, marker);
    }

    return;
  }

  if (!window.google || !window.google.maps) {
    return;
  }

  for (const place of state.places) {
    const latLng = getPlaceLatLng(place);
    if (!latLng) {
      continue;
    }

    const marker = new google.maps.Marker({
      map: state.map,
      position: { lat: latLng[0], lng: latLng[1] },
      title: localizeField(place.name) || place.id || ""
    });
    const infoWindow = new google.maps.InfoWindow({ content: createPlacePopupHtml(place) });
    marker.addListener("click", () => infoWindow.open({ anchor: marker, map: state.map }));

    state.googlePlaceMarkers.push(marker);
    state.googlePlaceInfoWindows.push(infoWindow);
    state.placeMarkerById.set(place.id, { marker, infoWindow });
  }
}

function createPlacePopupHtml(place) {
  const name = localizeField(place.name) || place.id || "";
  const summary = localizeField(place.summary) || t("placeSummaryMissing");
  const placeId = encodeURIComponent(String(place.id || ""));
  const lang = encodeURIComponent(state.language);

  return `
    <div class="place-popup">
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(summary)}</p>
      <a class="place-link" href="./place_detail.html?place=${placeId}&lang=${lang}">
        ${escapeHtml(t("placeDetailBtn"))}
      </a>
    </div>
  `;
}

function getPlaceLatLng(place) {
  const lat = Number(place?.location?.lat ?? place?.lat);
  const lng = Number(place?.location?.lng ?? place?.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }
  return [lat, lng];
}

function createPopupHtml(entry) {
  const speciesName = localizeField(entry.aiResult?.commonName) || t("unknownSpecies");

  return `
    <div style="min-width:180px;line-height:1.45;">
      <strong>${escapeHtml(speciesName)}</strong><br />
      <span>${escapeHtml(formatDate(entry.createdAt))}</span><br />
      <span>${escapeHtml(Number(entry.lat).toFixed(5))}, ${escapeHtml(Number(entry.lng).toFixed(5))}</span>
    </div>
  `;
}

function focusOnCheckin(entry) {
  const lat = Number(entry.lat);
  const lng = Number(entry.lng);

  if (state.mapProvider === "leaflet") {
    state.map.flyTo([lat, lng], Math.max(14, state.map.getZoom()), { duration: 0.9 });
    const marker = state.markerById.get(entry.id);
    if (marker) {
      marker.openPopup();
    }
    return;
  }

  state.map.panTo({ lat, lng });
  if (state.map.getZoom() < 14) {
    state.map.setZoom(14);
  }

  const markerWrapper = state.markerById.get(entry.id);
  if (markerWrapper?.infoWindow) {
    markerWrapper.infoWindow.open({ anchor: markerWrapper.marker, map: state.map });
  }
}

function clearLeafletMarkers() {
  for (const marker of state.leafletCheckinMarkers) {
    marker.remove();
  }
  state.leafletCheckinMarkers = [];
}

function clearGoogleMarkers() {
  for (const marker of state.googleCheckinMarkers) {
    marker.setMap(null);
  }
  for (const infoWindow of state.googleInfoWindows) {
    infoWindow.close();
  }
  state.googleCheckinMarkers = [];
  state.googleInfoWindows = [];
}

function clearPlaceMarkers() {
  for (const marker of state.leafletPlaceMarkers) {
    marker.remove();
  }
  state.leafletPlaceMarkers = [];

  for (const marker of state.googlePlaceMarkers) {
    marker.setMap(null);
  }
  for (const infoWindow of state.googlePlaceInfoWindows) {
    infoWindow.close();
  }
  state.googlePlaceMarkers = [];
  state.googlePlaceInfoWindows = [];
  state.placeMarkerById.clear();
}

function findSpeciesByText(text) {
  if (!text) {
    return null;
  }

  const normalized = String(text).toLowerCase();
  for (const species of window.SPECIES_LIBRARY || []) {
    const matchesKeyword = species.keywords.some((keyword) =>
      normalized.includes(String(keyword).toLowerCase())
    );
    const matchesName =
      normalized.includes(String(species.scientificName).toLowerCase()) ||
      normalized.includes(String(species.commonName?.en || "").toLowerCase()) ||
      normalized.includes(String(species.commonName?.zh || "").toLowerCase());

    if (matchesKeyword || matchesName) {
      return species;
    }
  }

  return null;
}

function pickRandomSpecies() {
  const list = window.SPECIES_LIBRARY || [];
  if (!list.length) {
    return {
      commonName: { zh: t("unknownSpecies"), en: t("unknownSpecies") },
      scientificName: "Unknown",
      conservationStatus: "N/A",
      habitat: { zh: "資料不足", en: "Insufficient data" },
      threats: { zh: "資料不足", en: "Insufficient data" },
      recommendedActions: { zh: "資料不足", en: "Insufficient data" },
      traits: { zh: ["資料不足"], en: ["Insufficient data"] }
    };
  }

  return list[Math.floor(Math.random() * list.length)];
}

function localizeField(value) {
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
    return value[state.language] || value.zh || value.en || "";
  }

  return String(value);
}

function localizeArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  if (value && typeof value === "object") {
    const picked = value[state.language] || value.zh || value.en || [];
    return Array.isArray(picked) ? picked : [String(picked)];
  }

  if (!value) {
    return [];
  }

  return [String(value)];
}

function formatDate(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleString(state.language === "zh" ? "zh-HK" : "en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function generateId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `id_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function renderHotspotMarkers() {
  if (!state.map) {
    return;
  }

  clearHotspotMarkers();

  if (state.mapProvider === "leaflet") {
    for (const hotspot of HOTSPOTS) {
      const marker = L.marker(hotspot.coords, {
        title: localizeField(hotspot.siteName)
      }).addTo(state.map);

      marker.bindPopup(createHotspotPopupHtml(hotspot), {
        maxWidth: 360,
        minWidth: 240,
        autoPan: true
      });
      marker.on("click", () => selectHotspot(hotspot.id, false));
      state.hotspotMarkersLeaflet.push({ id: hotspot.id, marker });
    }
    return;
  }

  for (const hotspot of HOTSPOTS) {
    const marker = new google.maps.Marker({
      map: state.map,
      position: { lat: Number(hotspot.coords[0]), lng: Number(hotspot.coords[1]) },
      title: localizeField(hotspot.siteName)
    });
    const infoWindow = new google.maps.InfoWindow({
      content: createHotspotPopupHtml(hotspot),
      maxWidth: 360
    });

    marker.addListener("click", () => {
      selectHotspot(hotspot.id, false);
      infoWindow.open({ anchor: marker, map: state.map });
    });

    state.hotspotMarkersGoogle.push({ id: hotspot.id, marker, infoWindow });
  }
}

function clearHotspotMarkers() {
  for (const wrapped of state.hotspotMarkersLeaflet) {
    wrapped.marker.remove();
  }
  state.hotspotMarkersLeaflet = [];

  for (const wrapped of state.hotspotMarkersGoogle) {
    wrapped.marker.setMap(null);
    wrapped.infoWindow.close();
  }
  state.hotspotMarkersGoogle = [];
}

function createHotspotPopupHtml(hotspot) {
  const birdRows = (hotspot.birds || [])
    .map((bird, index) => {
      return `
        <li class="map-hotspot-bird-item">
          <div class="map-hotspot-bird-name">${escapeHtml(localizeField(bird.commonName))}</div>
          <div class="map-hotspot-bird-science">${escapeHtml(bird.scientificName || "-")}</div>
          <div class="map-hotspot-bird-line"><strong>${escapeHtml(t("hotspotPopulationLabel"))}:</strong> ${escapeHtml(
        localizeField(bird.population)
      )}</div>
          <div class="map-hotspot-bird-line"><strong>${escapeHtml(t("hotspotDietLabel"))}:</strong> ${escapeHtml(
        localizeField(bird.diet)
      )}</div>
          <a class="map-hotspot-open-link" href="${escapeAttr(
            buildBirdDetailUrl(hotspot.id, index)
          )}">${escapeHtml(t("hotspotOpenBirdDetail"))}</a>
        </li>
      `;
    })
    .join("");

  return `
    <div class="map-hotspot-popup">
      <h4 class="map-hotspot-title">${escapeHtml(localizeField(hotspot.siteName))}</h4>
      <p class="map-hotspot-sub">${escapeHtml(localizeField(hotspot.subtitle))}</p>

      <p class="map-hotspot-section">${escapeHtml(t("hotspotBirdsTitle"))}</p>
      <ul class="map-hotspot-bird-list">${birdRows}</ul>

      <p class="map-hotspot-section">${escapeHtml(t("hotspotWetlandTitle"))}</p>
      <p class="map-hotspot-line"><strong>${escapeHtml(t("hotspotHydrologyLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.hydrology)
      )}</p>
      <p class="map-hotspot-line"><strong>${escapeHtml(t("hotspotPlantLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.plants)
      )}</p>
      <p class="map-hotspot-line"><strong>${escapeHtml(t("hotspotThreatLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.threats)
      )}</p>
      <p class="map-hotspot-line"><strong>${escapeHtml(t("hotspotActionLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.actions)
      )}</p>
    </div>
  `;
}

function getHotspotById(hotspotId) {
  return HOTSPOTS.find((hotspot) => hotspot.id === hotspotId) || null;
}

function selectHotspot(hotspotId, focusMap = false) {
  const hotspot = getHotspotById(hotspotId);
  if (!hotspot) {
    return;
  }

  state.selectedHotspotId = hotspot.id;
  renderHotspotList();
  renderHotspotDetail();

  if (focusMap) {
    focusOnHotspot(hotspot);
  }
}

function focusOnHotspot(hotspot) {
  if (!state.map) {
    return;
  }

  const lat = Number(hotspot.coords[0]);
  const lng = Number(hotspot.coords[1]);

  if (state.mapProvider === "leaflet") {
    state.map.flyTo([lat, lng], Math.max(13, state.map.getZoom()), { duration: 0.9 });
    const targetMarker = state.hotspotMarkersLeaflet.find((marker) => marker.id === hotspot.id);
    if (targetMarker?.marker) {
      targetMarker.marker.openPopup();
    }
    return;
  }

  state.map.panTo({ lat, lng });
  if (state.map.getZoom() < 13) {
    state.map.setZoom(13);
  }

  const targetMarker = state.hotspotMarkersGoogle.find((marker) => marker.id === hotspot.id);
  if (targetMarker?.infoWindow && targetMarker?.marker) {
    targetMarker.infoWindow.open({ anchor: targetMarker.marker, map: state.map });
  }
}

function renderHotspotList() {
  if (!dom.hotspotList) {
    return;
  }

  dom.hotspotList.innerHTML = HOTSPOTS.map((hotspot) => {
    const activeClass = state.selectedHotspotId === hotspot.id ? " active" : "";
    return `
      <li>
        <button class="hotspot-item-btn${activeClass}" data-hotspot-id="${escapeAttr(hotspot.id)}">
          ${escapeHtml(localizeField(hotspot.siteName))}
        </button>
      </li>
    `;
  }).join("");
}

function renderHotspotDetail() {
  if (!dom.hotspotDetail) {
    return;
  }

  const hotspot = getHotspotById(state.selectedHotspotId);
  if (!hotspot) {
    dom.hotspotDetail.classList.add("empty");
    dom.hotspotDetail.innerHTML = `<p>${escapeHtml(t("hotspotDetailEmpty"))}</p>`;
    return;
  }

  const birdCards = (hotspot.birds || [])
    .map((bird) => {
      return `
        <article class="bird-card">
          <h4 class="bird-title">${escapeHtml(localizeField(bird.commonName))}</h4>
          <p class="bird-science"><strong>${escapeHtml(t("scientificNameLabel"))}:</strong> ${escapeHtml(
            bird.scientificName || "-"
          )}</p>
          <p class="bird-meta"><strong>${escapeHtml(t("hotspotPopulationLabel"))}:</strong> ${escapeHtml(
            localizeField(bird.population)
          )}</p>
          <p class="bird-meta"><strong>${escapeHtml(t("hotspotDietLabel"))}:</strong> ${escapeHtml(
            localizeField(bird.diet)
          )}</p>
          <p class="bird-meta"><strong>${escapeHtml(t("hotspotNicheLabel"))}:</strong> ${escapeHtml(
            localizeField(bird.niche)
          )}</p>
        </article>
      `;
    })
    .join("");

  dom.hotspotDetail.classList.remove("empty");
  dom.hotspotDetail.innerHTML = `
    <header class="hotspot-head">
      <h3 class="hotspot-site">${escapeHtml(localizeField(hotspot.siteName))}</h3>
      <p class="hotspot-sub">${escapeHtml(localizeField(hotspot.subtitle))}</p>
    </header>
    <section>
      <h4 class="wetland-title">${escapeHtml(t("hotspotBirdsTitle"))}</h4>
      <div class="bird-list">${birdCards}</div>
    </section>
    <section class="wetland-card">
      <h4 class="wetland-title">${escapeHtml(t("hotspotWetlandTitle"))}</h4>
      <p class="wetland-line"><strong>${escapeHtml(t("hotspotHydrologyLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.hydrology)
      )}</p>
      <p class="wetland-line"><strong>${escapeHtml(t("hotspotPlantLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.plants)
      )}</p>
      <p class="wetland-line"><strong>${escapeHtml(t("hotspotThreatLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.threats)
      )}</p>
      <p class="wetland-line"><strong>${escapeHtml(t("hotspotActionLabel"))}:</strong> ${escapeHtml(
        localizeField(hotspot.wetland?.actions)
      )}</p>
    </section>
  `;
}

function onHotspotListClick(event) {
  const button = event.target.closest("button[data-hotspot-id]");
  if (!button) {
    return;
  }

  const hotspotId = button.dataset.hotspotId;
  selectHotspot(hotspotId, true);
}

function buildBirdDetailUrl(hotspotId, birdIndex) {
  const params = new URLSearchParams();
  params.set("hotspot", String(hotspotId || ""));
  params.set("bird", String(birdIndex));
  params.set("lang", state.language);
  return `./bird_detail.html?${params.toString()}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function roundTo2(value) {
  return Math.round(value * 100) / 100;
}
