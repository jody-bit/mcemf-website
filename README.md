# Mount Clemens Electronic Music Festival — Website

Official website for the Mount Clemens Electronic Music Festival, a free
electronic music festival in downtown Mount Clemens, MI.

## Structure

- `index.html` — the site (plain HTML/CSS, no build step required)
- `assets/logos/` — sponsor and partner logos
- `assets/images/` — put `mcemf-lineup-poster.jpeg` here (the lineup poster
  referenced in `index.html` isn't in this repo yet — add it before deploying)

## Local preview

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

This is a zero-config static site — Vercel will detect and deploy it as-is.
See the project setup notes for connecting this repo to Vercel.
