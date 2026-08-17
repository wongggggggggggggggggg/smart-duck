# Duck Island Eco Guardian — Machine Duck (copy)

A browser-based MVP web app for duck/island ecology conservation check-ins.
This is a working copy of the original `duck_island_eco_app` version.

## What is included
- Geo check-in with browser location permission
- Live map with provider fallback:
  - Google Maps (if `googleMapsApiKey` is set)
  - Leaflet + OpenStreetMap fallback (default)
- Photo upload validation (JPG/PNG/WEBP)
- AI species result card with conservation info
- Local feed of recent check-ins
- Gmail sign-in + automatic inbox summary sync (read-only)
- Chinese-first UI (Traditional Chinese) with English toggle
- Local persistence via `localStorage`

## Run locally
1. Open [index.html](index.html) directly in a modern browser.
2. If your browser blocks local features, run a simple local server:

```powershell
cd "c:\Users\stem\Downloads\ai playing\machine_duck"
python -m http.server 5500
```

3. Open `http://localhost:5500`.

## Optional: enable Google Maps
Edit [index.html](index.html) and set:

```js
window.APP_CONFIG = {
  googleMapsApiKey: "YOUR_GOOGLE_MAPS_JS_API_KEY",
  aiEndpoint: "",
  aiApiKey: "",
  gmailClientId: "YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com",
  gmailMaxResults: 10,
  gmailAutoRefreshMs: 180000,
  mapDefaultCenter: [22.3193, 114.1694],
  mapDefaultZoom: 11
};
```

If `googleMapsApiKey` is empty, the app uses Leaflet automatically.

## Optional: connect remote AI endpoint
Set `aiEndpoint` and optionally `aiApiKey` in [index.html](index.html).

The app will POST JSON:

```json
{
  "imageBase64": "...",
  "fileName": "duck.jpg",
  "mimeType": "image/jpeg"
}
```

Recommended response format:

```json
{
  "commonName": "Mallard",
  "scientificName": "Anas platyrhynchos",
  "confidence": 0.88,
  "conservationStatus": "LC",
  "habitat": "Wetlands and estuaries",
  "threats": "Habitat loss and pollution",
  "recommendedActions": "Protect wetlands and avoid disturbance",
  "keyVisualTraits": ["Green head", "Yellow bill"]
}
```

If remote AI fails, the app falls back to built-in demo inference.

## Gmail setup (important)
- Gmail cannot be accessed safely/legally from a browser app "without APIs".
- This app uses the official Google OAuth flow and Gmail API (`gmail.readonly`) to fetch message summaries.

Google Cloud setup steps:
1. Create/select a Google Cloud project.
2. Enable Gmail API.
3. Configure OAuth consent screen.
4. Create an OAuth 2.0 Client ID for Web application.
5. Add your local origin (example: `http://localhost:5500`) to Authorized JavaScript origins.
6. Put the Client ID into `gmailClientId` in [index.html](index.html).

After login, the app auto-refreshes inbox summaries every `gmailAutoRefreshMs` milliseconds.

## Notes
- This MVP stores all data locally in the browser only.
- For production: move upload and AI calls to a backend, add authentication, and store records in a database.

