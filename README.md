# Mitra Stay

Website for Mitra Stay — a six-room homestay on Jambuni Sericulture Road,
Bolpur, Birbhum, West Bengal 731204.

Static, single page, no build step. Open `index.html` in a browser.

## Structure

    index.html    the whole site — markup, CSS and JS inline
    img/          photographs, resized and JPEG-encoded for web

Type is Fraunces and Noto Serif Bengali, loaded from Google Fonts.
The design follows the Mitra Stay guest receipt: paper ground, double
hairline frame, ledger dot-leaders, alpona masthead, struck seal.

## Deploying

Any static host will serve this as-is. For GitHub Pages:
Settings → Pages → Deploy from branch → `main` / root.

## Still to fill in

- Airbnb listing URL — currently `href="#"` in the contact ledger
- The seal reads "SINCE THE HOUSE WAS BUILT"; replace with the year
- Rates are deliberately absent — the site is enquiry-only

## Editing the photographs

Images are committed at web resolution. Originals are not in this repo.
To swap one, replace the file in `img/` keeping the same name, or edit
the `<img src>` in `index.html`.
