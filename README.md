# 🌌 Horoscope API

![Tests](https://github.com/basial/horoscope-api/actions/workflows/tests.yml/badge.svg)

A playful REST API that serves randomized, tone-based horoscopes.  
Perfect for anyone who wants a dose of motivation, drama, or absurdity in JSON form.  

🚀 **Live API:**  
[https://horoscope-api-adcu.onrender.com/api/horoscope](https://horoscope-api-adcu.onrender.com/api/horoscope)  

---

## ✨ Features
- **3 tones** of horoscopes: `motivational`, `dramatic`, `rude`
- Random message every time you call the endpoint
- Query parameter `tone` to customize mood

---

## 📦 Example Requests

**Default tone:**
```bash
curl "https://horoscope-api-adcu.onrender.com/api/horoscope"
```

_Response:_
```json
{
  "tone": "rude",
  "message": "Uwierz w siebie, bo ktoś musi."
}
```

**Custom tone:**
```bash
curl "https://horoscope-api-adcu.onrender.com/api/horoscope?tone=dramatic"
```

_Response:_
```json
{
  "tone": "dramatic",
  "message": "Gwiazdy płaczą dziś krwawymi łzami…"
}
```
